// Multistep form 01
(function () {
    $(document).ready(function() {
        $('.selectPropertyType01').select2();
        $('.selectPropertySize01').select2();
    });

    function verifyZipCode() {
        let zipCode = $('#propertyZip').val();
        if (zipCode.length > 4 && zipCode.length < 13 && zipCode.match(/^\d+$/)) {
            return true;
        }
        return false;
    }

    function verifyForm() {
        if ($('.selectPropertyType01').val() != '' && $('.selectPropertySize01').val() != '' && verifyZipCode()) {
            return true;
        } 
        return false;
    }

    function updateFormStatus() {
        if (verifyForm()) {
            $('.submit').removeClass('disabled');
        } 
        else {
            $('.submit').addClass('disabled');
        }
    }
    
    $('.selectPropertyType01').change(updateFormStatus);
    $('.selectPropertySize01').change(updateFormStatus);
    $('#propertyZip').change(updateFormStatus);
})();

// Multistep form 02
(function () {
    $(document).ready(function() {
        $('.selectPropertyType02').select2();
        $('.selectPropertySize02').select2();
    });
})();