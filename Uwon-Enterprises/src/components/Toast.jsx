import React from 'react';
 
export default function Toast({ message, type, isVisible }) {
    if (!isVisible) return null;
 
    return (
        <div
            id="toast"
            className="toast"
            style={{
                borderLeftColor: type === 'success' ? 'var(--primary)' : 'var(--danger)',
                display: 'block'
            }}
        >
            <div className="toast-content">
                <i
                    id="toast-icon"
                    className={`fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`}
                    style={{ color: type === 'success' ? 'var(--primary)' : 'var(--danger)' }}
                ></i>
                <span id="toast-message">{message}</span>
            </div>
        </div>
    );
}
 