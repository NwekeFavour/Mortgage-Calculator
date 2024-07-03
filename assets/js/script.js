$(document).ready(function () {
    // inputs
    var Amount = $('#M_amount');
    var years = $('#years')
    var rate = $('#rate');
    // console.log(mainrate)
    // console.log(mainAmount);


    // button for repayment 
    $('.repay').click(function () {
        // is radio clicked
        if ($('.repay').is(':checked')) {
            $('.radiobg').addClass('repaymentBg'); 
            $('.radiobg2').removeClass('repaymentBg');
            $('.radiobg').addClass('border-warning-subtle');
            $('.radiobg2').removeClass('border-warning-subtle');
            
            
        } else {
            $('.radiobg').removeClass('border-warning-subtle')
            console.log("not clicked");
            $('.radiobg').removeClass('repaymentBg');     
        }

        if (Amount.val() == '') {
            $('#Error0').text('The field is required');
            $('#basic-addon1').addClass('input-group-text3')            
            console.log("empty input");
        } else {
            $('#M_amount').addClass('hng');      
            $('#basic-addon1').addClass('input-group-text2')      
        }
        if (rate.val() == '') {
            $('#Error1').text('The field is required');
            $('#basic-addon12').addClass('input-group-text3')            
            console.log("eror")
        } else {
            $('#rate').addClass('hng');      
            $('#basic-addon12').addClass('input-group-text2')            
        }
         if (years.val() == '') {
            $('#Error2').text('The field is required');
            $('#basic-addon13').addClass('input-group-text3')            
            console.log("eror")
        } else {
            $('#years').addClass('hng');      
            $('#basic-addon13').addClass('input-group-text2')            
        }

         
        
    });
    $('.repay2').click(function() {
        if ($('.repay2').is(':checked')) {
            $('.radiobg2').addClass('repaymentBg');
            $('.radiobg').removeClass('repaymentBg');
            $('.radiobg2').addClass('border-warning-subtle');
            $('.radiobg').removeClass('border-warning-subtle');
            
            
        } else {
            $('radiobg').removeClass('border-warning-subtle')
            console.log("not clicked");
        }

        if (Amount.val() == '') {
            $('#Error0').text('The field is required');
            $('#basic-addon1').addClass('input-group-text3')                    
            console.log("empty input");
        } else {
            $('#basic-addon1').addClass('input-group-text2')      
            $('#M_amount').addClass('hng');      
        }
        if (rate.val() == '') {
            $('#Error1').text('The field is required');
            $('#basic-addon12').addClass('input-group-text3')            
            console.log("eror")
        } else {
            $('#rate').addClass('hng');      
            $('#basic-addon12').addClass('input-group-text2')  
        }
        if (years.val() == '') {
            $('#Error2').text('The field is required');
            $('#basic-addon13').addClass('input-group-text3')            
            console.log("eror")
        } else {
            $('#years').addClass('hng');      
            $('#basic-addon13').addClass('input-group-text2')            
        }
        
        
    });

    $('#form').submit(function (e) { 
        e.preventDefault();
        var mainAmount = parseInt(Amount.val());
        var mainyears = parseInt(years.val());
        var mainrate = parseFloat(rate.val());
        console.log(mainAmount, mainyears, mainrate);
        var n = (mainyears) * 12;
        console.log(n)
        var rate_percent = (mainrate.toFixed(3))/100
        var M_Rates = (rate_percent) / 12
        console.log(M_Rates)
        var formula = (M_Rates *(1 + M_Rates)**n);
        console.log(formula)
        var denom = ((1 + M_Rates) ** n) - 1
        console.log(denom);
        var mortgage = formula / denom
        console.log(mortgage)
        var Result = mainAmount * mortgage
        // console.log(Result.toFixed(3));
        // display

        
        var Interestovertime = $('#monthly_repayment').text(Result.toFixed(2))
        var actualMortgage = Result * n;
        var MoneyOvertime = $('#totalPayment').text(actualMortgage.toFixed(2));
        console.log(actualMortgage.toFixed(3))
        
        if (Amount.val() == '') {
            $('#Error0').text('The field is required');
            $('#basic-addon1').addClass('input-group-text3');
            $('#M_amount').addClass('border-danger');
        } else {
        }
        if (rate.val() == '') {
            $('#Error1').text('The field is required');
            $('#basic-addon12').addClass('input-group-text3');
            $('#rate').addClass('border-danger');

        } else {
        }
        if (years.val() == '') {
            $('#Error2').text('The field is required');
            $('#basic-addon13').addClass('input-group-text3');
            $('#years').addClass('border-danger');
        } else {
        }

        if ($(':radio').is(':checked')) {
            $('.init').addClass('resultVisible')
            $('#result').removeClass('resultVisible');
            console.log('checked')
        } else {
            console.log('Check again')
            $('#result').addClass('resultVisible');
            $('#Error3').text('The field is required')
        }
        
        // if ($('.repay2').is(':checked')) {
        //     console.log('checked')
        // } else {
        //     $('#Error3').text('The field is required')
        // }
        $('#calcsect').addClass('calc')
        $('#calcsect').removeClass('calcSect');

    });

    $('#Clear').click(function (e) { 
        e.preventDefault();
            var Amount = $('#M_amount').val('');
            var years = $('#years').val('');
            var rate = $('#rate').val('');
            var radioOne = $('.repay');
            var radioTwo = $('repay2')
            radioOne.prop('checked', false);
            radioTwo.prop('checked', false);
            $('#result').addClass('resultVisible');
            $('.init').removeClass('resultVisible');
            $('#calcsect').addClass('calcSect')
            $('#calcsect').removeClass('calc')
            
    });
    
});


    // formula
            // var main_n = parseInt(n)
            // var Rates = (mainrate) / 12
            // var parsedRate = parseFloat(Rates);
            // var MonthResult = parseFloat(formula);
            // console.log(Rates);
            // var mainFormula = formula / denom