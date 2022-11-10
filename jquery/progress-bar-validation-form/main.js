(function () {
    function isValidName(field) {
        return field.val().trim() != '';
    }

    function isValidEmail(field) {
        let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return field.val().match(mailRegex);
    }

    function isValidPhone(field) {
        let phoneRegex = /^(\d{3}-|\(\d{3}\)\s)\d{3}-\d{4}$/;
        return field.val().match(phoneRegex);
    }

    function isValidPassword(field) {
        return field.val().length > 5;
    }

    function validate(field) {
        if (field.attr('type') == 'text') {
            return isValidName(field);
        } else if (field.attr('type') == 'email') {
            return isValidEmail(field);
        } else if (field.attr('type') == 'tel') {
            return isValidPhone(field);
        } else if (field.attr('type') == 'password') {
            return isValidPassword(field);
        }
        return false;
    }

    var valueTotal = 0;
    var validatedFields = {};
    var percent = (100 / $('input').filter('[required]').length);
    $('input').filter('[required]').on('input', function() {
        $('input').filter('[required]').each(function(index, element) {
            if (validate($(element)) && ! validatedFields[index]) {
                validatedFields[index] = true;
                valueTotal += percent;
            } else if (! validate($(element)) && validatedFields[index]) {
                validatedFields[index] = false;
                valueTotal -= percent;
            }
        });
        $('.progress-text').html(valueTotal.toFixed(0) + '% complete');
        $('.progress-bar').attr('aria-valuenow', valueTotal.toFixed(0)).css('width', valueTotal.toFixed(0) + '%');
    });
})();