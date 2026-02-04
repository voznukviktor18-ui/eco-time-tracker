// script.js - Общие функции для работы с Google Apps Script API

// 🔹 ВАЖНО! Замените этот URL на URL вашего развернутого Google Apps Script веб-приложения
const API_URL = 'https://script.google.com/macros/s/ВАШ_ВЕБ_APP_URL/exec';

// Функция для отправки запросов к Google Apps Script
async function callGoogleScript(action, data = {}) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            mode: 'cors', // ✅ Изменили на 'cors' для работы с GitHub Pages
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: action,
                ...data
            })
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
    
    if (result.success !== false) {
        const select = document.getElementById('driver-select');
        select.innerHTML = '<option value="">-- Выберите себя --</option>';
        
        result.forEach(driver => {
            const option = document.createElement('option');
            option.value = driver.id;
            option.textContent = `${driver.name} (${driver.role})`;
            select.appendChild(option);
        });
    }
}

// Загружаем список грузчиков
async function loadLoaders() {
    const result = await callGoogleScript('getLoaders');
    
    if (result.success !== false) {
        const select1 = document.getElementById('loader1-select');
        const select2 = document.getElementById('loader2-select');
        
        // Сохраняем текущие выбранные значения
        const currentVal1 = select1.value;
        const currentVal2 = select2.value;
        
        // Очищаем и заполняем оба селекта
        const baseOptions = '<option value="">-- Не выбрано --</option>';
        
        // Очищаем текущие опции (кроме первой)
        select1.innerHTML = baseOptions;
        select2.innerHTML = baseOptions;
        
        result.forEach(loader => {
            const option = document.createElement('option');
            option.value = loader.id;
            option.textContent = `${loader.name} (${loader.role})`;
            
            select1.appendChild(option.cloneNode(true));
            select2.appendChild(option.cloneNode(true));
        });
        
        // Восстанавливаем выбранные значения
        select1.value = currentVal1;
        select2.value = currentVal2;
    }
}

// Показываем уведомление
function showNotification(message, type = 'info') {
    // Простая реализация через alert. Позже заменим на красивый попап.
    alert(message);
}

// Загружаем данные при старте
document.addEventListener('DOMContentLoaded', function() {
    loadDrivers();
    loadLoaders();
});
