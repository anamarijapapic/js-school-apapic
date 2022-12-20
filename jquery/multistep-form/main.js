// Multistep form 01
( function () {

    $( '.selectPropertyType01' ).select2();
    $( '.selectPropertySize01' ).select2();

    const propertySizeHtml = $( '.selectPropertySize01' ).html();

    $( '.selectPropertyType01' ).on( 'change', function() {
        const selectedPropertyType = $( '[name=propertyType] :selected' ).text();
        const propertySize = $( '.selectPropertySize01' );

        propertySize.html( propertySizeHtml );

        const optGroup = $( 'optgroup[label="' + selectedPropertyType + '"]' ).html();

        propertySize.html( optGroup );
    } );

    const nextSteps = $( '.form-step-next' );

    nextSteps.each( function() {
        const stepFormField = $( this ).find( '.form-control' );
        const stepImage = $( this ).find( '.form-step-image' );
        const stepNumber = $( this ).find( '.form-step-number' );

        const selectPrev = $( this ).prevAll().children().find( 'select' );

        selectPrev.on( 'change', function() {
            selectPrev.each( function() {
                if ( $( this ).val() == '' ) {
                    stepFormField.prop( 'disabled', true );
                    stepImage.css( 'display', 'none' );
                    stepNumber.css( 'color', '#808080' );
                } else {
                    stepFormField.prop( 'disabled', false );
                    stepImage.css( 'display', 'initial' );
                    stepNumber.css( 'color', '#ff5f15' );
                }
            } );
        } );
    } );

    function verifyZipCode() {
        let zipCode = $( '#propertyZip' ).val();
        if ( zipCode.length > 4 && zipCode.length < 13 && zipCode.match( /^\d+$/ ) ) {
            return true;
        }
        return false;
    }

    function verifyForm() {
        if ( $( '.selectPropertyType01' ).val() != '' && $( '.selectPropertySize01' ).val() != '' && verifyZipCode() ) {
            return true;
        } 
        return false;
    }

    function updateFormStatus() {
        if ( verifyForm() ) {
            $( '.submit' ).removeClass( 'disabled' );
        } else {
            $( '.submit' ).addClass( 'disabled' );
        }
    }

    $( '.selectPropertyType01' ).on( 'change', updateFormStatus );
    $( '.selectPropertySize01' ).on( 'change', updateFormStatus );
    $( '#propertyZip' ).on( 'change', updateFormStatus );

} ) ();


// Multistep form 02
( function () {

    $( '.selectPropertyType02' ).select2();
    $( '.selectPropertySize02' ).select2( {
        width: 800
    } );

    const propertySizeHtml = $( '.selectPropertySize02' ).html();

    $( '.selectPropertyType02' ).on( 'change', function() {
        const selectedPropertyType = $( '[name=propertyType] :selected' ).text();
        const propertySize = $( '.selectPropertySize02' );

        propertySize.html( propertySizeHtml );

        const optGroup = $( 'optgroup[label="' + selectedPropertyType + '"]' ).html();

        propertySize.html( optGroup );
    } );

    function verifyZipCode() {
        let zipCode = $( '#propertyZip' ).val();
        if ( zipCode.length > 4 && zipCode.length < 13 && zipCode.match( /^\d+$/ ) ) {
            return true;
        }
        return false;
    }

    function updateFormStatus() {
        if ( verifyZipCode() ) {
            $( '.submit02' ).prop( 'disabled', false );
        } else {
            $( '.submit02' ).prop( 'disabled', true );
        }
    }

    function updateStepStatus() {
        const currentStep = $( '.show' );

        if ( currentStep.find( '.form-control' ).val() == '' ) {
            $( '.submit02' ).prop( 'disabled', true );
            return false;
        } else {
            $( '.submit02' ).prop( 'disabled', false );
        }
    }

    $( '.submit02' ).on( 'click', function( event ) {
        event.preventDefault();

        $( '.submit02' ).prop( 'disabled', true );

        const currentStep = $( '.show' );
        const nextStep = currentStep.next().filter( '.hidden' );

        if ( ! nextStep.length ) {
            $( '.multistep-form-02' ).submit();
        } else {
            currentStep.removeClass( 'show' );
            currentStep.addClass( 'hidden' );

            const myProgress = $( '.progressBar' ).find( '.active' );
            myProgress.next().addClass( 'active' );

            nextStep.removeClass( 'hidden' ); 
            nextStep.addClass( 'show' ); 
        }
    } );

    $( '.selectPropertyType02' ).on( 'change', updateStepStatus );
    $( '.selectPropertySize02' ).on( 'change', updateStepStatus );
    $( '#propertyZip' ).on( 'change', updateFormStatus );

} ) ();
