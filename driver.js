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
    
    // Вызываем API аутентификации через GET запрос
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
