/**
 * File: toast-notification.js
 * Description: This script provides a customizable toast notification system.
 * Author: Michael Minton UK
 * Created on: July 29, 2024
 * License: Unlicence License
 * Website: https://github.com/mikeminton
 */

function toastMessage(text, type = 'warning') {
    const iconMap = {
        success: '<i class="fas fa-check-circle"></i>',
        warning: '<i class="fas fa-exclamation-circle"></i>',
        error: '<i class="fas fa-times-circle"></i>'
    };

    const colorMap = {
        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545'
    };

    const toastContainer = document.querySelector('.toast-container') || createToastContainer();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.backgroundColor = colorMap[type] || colorMap.warning;
    
    const iconSpan = document.createElement('span');
    iconSpan.className = 'toast-icon';
    iconSpan.innerHTML = iconMap[type] || iconMap.warning;
    
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    
    toast.appendChild(iconSpan);
    toast.appendChild(textSpan);
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
}
