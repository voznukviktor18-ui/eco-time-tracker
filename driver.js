// driver.js - Логика страницы водителя

let currentDriver = null;
let currentShift = null;

// Аутентификация водителя
async function authenticateDriver() {
    const driverSelect = document.getElementById('driver-select');
    const pinInput = document.getElementById('pin-input');
    
    const driverId = driverSelect.value;
    const pin = pinInput.value;
    
    if (!driverId) {
        showNotification('Выберите себя из списка');
        return;
    }
    
    if (!pin || pin.length !== 4 || !/^\d+$/.test(pin)) {
        showNotification('Введите корректный PIN-код (4 цифры)');
        return;
    }
    
    // Показываем индикатор загрузки
    const authButton = document.getElementById('auth-button');
    const originalText = authButton.innerHTML;
    authButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Проверка...';
    authButton.disabled = true;
    
    // Вызываем API аутентификации
    const result = await callGoogleScript('authenticate', {
        employeeId: driverId,
        pin: pin
    });
    
    // Восстанавливаем кнопку
    authButton.innerHTML = originalText;
    authButton.disabled = false;
    
    if (result.success) {
        currentDriver = result.employee;
        
        // Прячем блок авторизации, показываем блок управления сменой
        document.getElementById('auth-section').style.display = 'none';
        const shiftSection = document.getElementById('shift-section');
        shiftSection.style.display = 'block';
        
        // Загружаем данные об активной смене
        await loadCurrentShift();
        
        // Очищаем PIN
        pinInput.value = '';
        
        showNotification(`Добро пожаловать, ${currentDriver.name}!`);
    } else {
        showNotification(result.message || 'Ошибка аутентификации');
    }
}

// Загрузка информации о текущей смене
async function loadCurrentShift() {
    if (!currentDriver) return;
    
    const result = await callGoogleScript('getActiveShift', {
        driverId: currentDriver.id
    });
    
    if (result.success && result.hasActiveShift) {
        currentShift = result.shift;
        updateShiftUI(true);
    } else {
        currentShift = null;
        updateShiftUI(false);
    }
}

// Обновление интерфейса в зависимости от состояния смены
function updateShiftUI(hasActiveShift) {
    const statusBox = document.getElementById('status-info');
    const startBtn = document.getElementById('start-btn');
    const changeBtn = document.getElementById('change-btn');
    const endBtn = document.getElementById('end-btn');
    const loader1Select = document.getElementById('loader1-select');
    const loader2Select = document.getElementById('loader2-select');
    
    if (hasActiveShift && currentShift) {
        // Есть активная смена
        statusBox.innerHTML = `
            <i class="fas fa-check-circle" style="color: green;"></i>
            <h3>Смена активна</h3>
            <p>Начало: ${currentShift.startTime}</p>
            <p>Грузчик 1: ${currentShift.loader1Name || 'Не выбран'}</p>
            <p>Грузчик 2: ${currentShift.loader2Name || 'Не выбран'}</p>
        `;
        
        // Блокируем выбор грузчиков и кнопку "Начать"
        loader1Select.disabled = true;
        loader2Select.disabled = true;
        startBtn.disabled = true;
        
        // Активируем кнопки управления
        changeBtn.disabled = false;
        endBtn.disabled = false;
        
    } else {
        // Нет активной смены
        statusBox.innerHTML = `
            <i class="fas fa-info-circle" style="color: var(--primary-color);"></i>
            <h3>Смена не начата</h3>
            <p>Выберите грузчиков и нажмите "Начать смену"</p>
        `;
        
        // Активируем выбор грузчиков и кнопку "Начать"
        loader1Select.disabled = false;
        loader2Select.disabled = false;
        startBtn.disabled = false;
        
        // Блокируем кнопки управления
        changeBtn.disabled = true;
        endBtn.disabled = true;
    }
}

// Начало новой смены
async function startShift() {
    if (!currentDriver) {
        showNotification('Сначала пройдите авторизацию');
        return;
    }
    
    const loader1Id = document.getElementById('loader1-select').value;
    const loader2Id = document.getElementById('loader2-select').value;
    
    if (!loader1Id && !loader2Id) {
        showNotification('Выберите хотя бы одного грузчика');
        return;
    }
    
    // Проверяем, что один грузчик не выбран дважды
    if (loader1Id && loader2Id && loader1Id === loader2Id) {
        showNotification('Один и тот же грузчик не может быть выбран дважды');
        return;
    }
    
    // Показываем индикатор загрузки
    const startBtn = document.getElementById('start-btn');
    const originalText = startBtn.innerHTML;
    startBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Начинаем...';
    startBtn.disabled = true;
    
    const result = await callGoogleScript('startShift', {
        driverId: currentDriver.id,
        loader1Id: loader1Id || null,
        loader2Id: loader2Id || null
    });
    
    // Восстанавливаем кнопку
    startBtn.innerHTML = originalText;
    startBtn.disabled = false;
    
    if (result.success) {
        showNotification(result.message);
        await loadCurrentShift(); // Перезагружаем состояние смены
    } else {
        showNotification(result.message);
    }
}

// Завершение смены
async function endShift() {
    if (!currentShift) return;
    
    const confirmEnd = confirm(`Вы уверены, что хотите завершить смену?\n\nНачало: ${currentShift.startTime}`);
    
    if (!confirmEnd) return;
    
    // Показываем индикатор загрузки
    const endBtn = document.getElementById('end-btn');
    const originalText = endBtn.innerHTML;
    endBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Завершаем...';
    endBtn.disabled = true;
    
    const result = await callGoogleScript('endShift', {
        shiftId: currentShift.id
    });
    
    // Восстанавливаем кнопку
    endBtn.innerHTML = originalText;
    endBtn.disabled = false;
    
    if (result.success) {
        showNotification(`${result.message}\n\nВремя окончания: ${result.endTime}`);
        currentShift = null;
        updateShiftUI(false);
    } else {
        showNotification(result.message);
    }
}

// Показ модального окна для замены грузчика (заглушка на этапе 1)
function showChangeModal() {
    alert('Функция замены грузчика будет доступна на Этапе 3 разработки.');
}

// Выход из системы (дополнительная функция)
function logout() {
    currentDriver = null;
    currentShift = null;
    
    document.getElementById('auth-section').style.display = 'block';
    document.getElementById('shift-section').style.display = 'none';
    
    document.getElementById('driver-select').selectedIndex = 0;
    document.getElementById('pin-input').value = '';
    
    showNotification('Вы вышли из системы');
}