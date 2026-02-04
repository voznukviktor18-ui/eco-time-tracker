// script.js - Общие функции для работы с Google Apps Script API

// 🔹 ВАЖНО! Замените этот URL на URL вашего развернутого Google Apps Script веб-приложения
const API_URL = 'https://script.google.com/macros/s/AKfycbwfIS-BWcFVVU8P1henlBGB2czBUX12_IOisDcLuvm5hK42DdoP3zbAuRK4yxJvOHg/exec';

// Функция для отправки GET запросов к Google Apps Script (обход CORS)
async function callGoogleScript(action, data = {}) {
    try {
        // Формируем URL с параметрами
        const url = new URL(API_URL);
        url.searchParams.append('action', action);
        
        // Добавляем данные как параметры для GET запроса
        if (Object.keys(data).length > 0) {
            url.searchParams.append('data', JSON.stringify(data));
        }
        
        // Используем GET запрос вместо POST для обхода CORS preflight
        const response = await fetch(url.toString(), {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
            }
        });
        
        // Проверяем статус ответа
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Ошибка при вызове API:', error);
        return {
            success: false,
            message: 'Сетевая ошибка. Проверьте интернет.'
        };
    }
}

// Функция для отправки POST запросов (для действий, которые изменяют данные)
async function callGoogleScriptPost(action, data = {}) {
    try {
        // Используем форму для отправки данных (обход CORS)
        const formData = new FormData();
        formData.append('action', action);
        formData.append('data', JSON.stringify(data));
        
        const response = await fetch(API_URL, {
            method: 'POST',
            mode: 'cors',
            body: formData
        });
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Ошибка при вызове API:', error);
        return {
            success: false,
            message: 'Сетевая ошибка. Проверьте интернет.'
        };
    }
}

// Загружаем список водителей при загрузке страницы
async function loadDrivers() {
    const result = await callGoogleScript('getDrivers');
    
    if (result && !result.success && Array.isArray(result)) {
        const select = document.getElementById('driver-select');
        select.innerHTML = '<option value="">-- Выберите себя --</option>';
        
        result.forEach(driver => {
            const option = document.createElement('option');
            option.value = driver.id;
            option.textContent = `${driver.name} (${driver.role})`;
            select.appendChild(option);
        });
        console.log('Водители загружены:', result.length, 'человек');
    } else {
        console.error('Ошибка загрузки водителей:', result);
    }
}

// Загружаем список грузчиков
async function loadLoaders() {
    const result = await callGoogleScript('getLoaders');
    
    if (result && !result.success && Array.isArray(result)) {
        const select1 = document.getElementById('loader1-select');
        const select2 = document.getElementById('loader2-select');
        
        // Очищаем и заполняем оба селекта
        const baseOptions = '<option value="">-- Не выбрано --</option>';
        
        // Очищаем текущие опции
        select1.innerHTML = baseOptions;
        select2.innerHTML = baseOptions;
        
        result.forEach(loader => {
            const option = document.createElement('option');
            option.value = loader.id;
            option.textContent = `${loader.name} (${loader.role})`;
            
            select1.appendChild(option.cloneNode(true));
            select2.appendChild(option.cloneNode(true));
        });
        
        console.log('Грузчики загружены:', result.length, 'человек');
    } else {
        console.error('Ошибка загрузки грузчиков:', result);
    }
}

// Показываем уведомление
function showNotification(message, type = 'info') {
    // Простая реализация через alert. Позже заменим на красивый попап.
    alert(message);
}

// Загружаем данные при старте
document.addEventListener('DOMContentLoaded', function() {
    console.log('Загружаем данные...');
    loadDrivers();
    loadLoaders();
});
