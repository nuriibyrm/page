// Ripple efekti ve kişi kartı indirme işlemi
document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', function (e) {
        // Ripple efekti
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        ripple.className = 'ripple';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

        // Kişi kartı indirme
        const link = document.createElement('a');
        link.href = 'nuribyrm.vcf';
        link.download = 'Nurettin_Bayram.vcf';
        link.click();
    });
});
