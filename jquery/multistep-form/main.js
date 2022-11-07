// Multistep form 01
(function () {
    $(document).ready(function() {
        $('.selectPropertyType01').select2();
        $('.selectPropertySize01').select2();
    });

    $(document).ready(function() {
        let propertySizeHtml = $('.selectPropertySize01').html();

        $('.selectPropertyType01').change(function() {
            let selectedPropertyType = $('[name=propertyType] :selected').text();
            let propertySize = $('.selectPropertySize01');

            propertySize.html(propertySizeHtml);

            let optGroup = $('optgroup[label="' + selectedPropertyType + '"]').html();

            propertySize.html(optGroup);
        });
    });

    $(document).ready(function() {
        let nextSteps = $(this).find('.form-step-next');

        nextSteps.each(function() {
            let stepFormField = $(this).find('.form-control');
            let stepImage = $(this).find('.form-step-image');
            let stepNumber = $(this).find('.form-step-number');

            let selectPrev = $(this).prevAll().children().find('select');

            selectPrev.change(function() {
                selectPrev.each(function() {
                    if ($(this).val() == '') {
                        stepFormField.prop("disabled", true);
                        stepImage.css('display', 'none');
                        stepNumber.css('color', '#808080');
                    } else {
                        stepFormField.prop("disabled", false);
                        stepImage.css('display', 'initial');
                        stepNumber.css('color', '#ff5f15');
                    }
                });
            });
        });
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
        } else {
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
        $('.selectPropertySize02').select2({
            width: 800
          });
    });

    $(document).ready(function() {
        let propertySizeHtml = $('.selectPropertySize02').html();

        $('.selectPropertyType02').change(function() {
            let selectedPropertyType = $('[name=propertyType] :selected').text();
            let propertySize = $('.selectPropertySize02');

            propertySize.html(propertySizeHtml);

            let optGroup = $('optgroup[label="' + selectedPropertyType + '"]').html();

            propertySize.html(optGroup);
        });
    });

    function verifyZipCode() {
        let zipCode = $('#propertyZip').val();
        if (zipCode.length > 4 && zipCode.length < 13 && zipCode.match(/^\d+$/)) {
            return true;
        }
        return false;
    }

    function updateFormStatus() {
        if (verifyZipCode()) {
            $('.submit02').prop("disabled", false);
        } else {
            $('.submit02').prop("disabled", true);
        }
    }

    function updateStepStatus() {
        let currentStep = $(document).find('.show');
        
        if (currentStep.find('.form-control').val() == '') {
            $('.submit02').prop("disabled", true);
            return false;
        } else {
            $('.submit02').prop("disabled", false);
        }
    }

    $('.submit02').click(function(event){
        event.preventDefault();

        $('.submit02').prop("disabled", true);

        let currentStep = $(document).find('.show');
        let nextStep = currentStep.next().filter('.hidden');

        if (! nextStep.length) {
            $('.multistep-form-02').submit();
        } else {
            currentStep.removeClass('show');
            currentStep.addClass('hidden');

            let myProgress = $('.progressBar').find('.active');
            myProgress.next().addClass('active');

            nextStep.removeClass('hidden'); 
            nextStep.addClass('show'); 
        }
    });

    $('.selectPropertyType02').change(updateStepStatus);
    $('.selectPropertySize02').change(updateStepStatus);
    $('#propertyZip').change(updateFormStatus);
})();