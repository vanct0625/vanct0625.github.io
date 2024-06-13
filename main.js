function copyToClipboard() {
            const accountNumber = document.getElementById('accountNumber').innerText;
            const textarea = document.createElement('textarea');
            textarea.value = accountNumber;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('Account number copied to clipboard');
        }