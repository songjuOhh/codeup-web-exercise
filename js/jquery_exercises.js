$(document).ready(function(){
    // document.querySelectorAll('.login').forEach(function(element){
    //     element.addEventListener('click', function(){
    //         this.setAttribute('style', 'background-color: red');
    //     });
    // });
    $('.login').click(function(){
        $(this).css('background-color', 'red');
    });
    $('.menu, .close-menu').click(function(){
        $('.mobile-menu').toggleClass('open');
    });

    // $(document).keydown(function(event){
    //     let keyPressed = event.keyCode;
    //     if (keyPressed === 32){
    //         alert('space bar is pressed');
    //     }
    // });


    // document.querySelector('#filter').addEventListener('keyup', function(event){
    //     let keyPressed = event.keyCode;
    //     if (keyPressed === 32){
    //         $(this).val();
    //     }
    //     let text = $(this).val();
    //     if (text === '') {
    //         $('li').show();
    //     }else {
    //         $('li').each(function () {
    //             let lilText = $(this).text();
    //             if (text.toLowerCase() === lilText.toLowerCase()) {
    //                 $(this).show();
    //             } else {
    //                 $(this).hide();
    //             }
    //         })
    //     }
    // })

    $('#filter').on('keyup', function(event){
        let keyPressed = event.keyCode;
        if (keyPressed === 32){
            $(this).val();
        }
        let text = $(this).val();
        if (text === '') {
            $('li').show();
        }else {
            $('li').each(function () {
                let lilText = $(this).text();
                if (text.toLowerCase() === lilText.toLowerCase()) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            })
        }
    })

    $(document).on('click','li',function(){
        $(this).css('color', 'red');
    })

    let newListItem = <li class ="codeup">New dynamically added li</li>;
    $('#list2').append(newListItem);
});

