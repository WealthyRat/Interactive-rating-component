const submitBtn = document.querySelector('.my-submit');
const buttons = document.querySelectorAll('.my-btn');
const ratingCard = document.querySelector('.rating-card-container');
const mainCard = document.querySelector('.card-container');
const rateScore = document.getElementById('numberDisplay');

let gratitudeText2 = document.querySelector(".gratitude-text-2");

let selectedScoreRate = 0;

function updateSelectedScoreRate(scoreRate) {
    selectedScoreRate = scoreRate;
    rateScore.textContent = selectedScoreRate;

    
}



buttons.forEach((button, index) => {


    button.addEventListener("click", function () {
        updateSelectedScoreRate(index + 1)

        
        const option = button.getAttribute('data-option');
        let ratingScore = "";

        // switch statement to determine rating score based on the clicked option
        switch(option) {
            case 'option1':
                ratingScore = 'You rating 1 is just unfortunate, you may need to reconsider it';
                break;
            case 'option2':
                ratingScore = '2 is the value of mediocrity, you may take it back, pal';
                break;
            case 'option3':
                ratingScore = 'Thank you for rating us 3, it is a fair enough number';
                break;
            case 'option4':
                ratingScore = 'Okiedokie, thank you so much!';
                break;
            case 'option5':
                ratingScore = 'We appreciate you taking the time to give a rating. If you ever need more support, do not hesitate to get in touch';
                break;
        }
        gratitudeText2.textContent = ratingScore;

        // toggle class in each element everytime clicked

        
        buttons.forEach(btn => {
            if (btn !== button) {
                btn.classList.remove('active')
                btn.classList.add('my-btn')
            } else {
                btn.classList.add('active')
                btn.classList.remove('my-btn')
            }
        })
    })
}) 

updateSelectedScoreRate(selectedScoreRate);
//


mainCard.style.display = "none"
ratingCard.style.display = "flex"

function submit() {


    submitBtn.addEventListener("click", function() {
        
        if(ratingCard.classList.contains('hidden')) {
            ratingCard.style.display = "none";
            mainCard.style.display = "flex";
        } else {
            ratingCard.style.display = "flex"
            mainCard.style.display = "none";

        }


        
    })

    // generated submit button

    let generatedSubmitBtn = document.createElement("button");
    generatedSubmitBtn.classList.add('generated-btn');
    generatedSubmitBtn.innerHTML = "Take it back?"
    ratingCard.appendChild(generatedSubmitBtn)

    generatedSubmitBtn.addEventListener('click', function() {

        if(ratingCard.classList.contains('rating-card-container')){
            ratingCard.style.display = 'none';
            mainCard.style.display = "flex";
        } else {
            ratingCard.style.display = "block";
            mainCard.style.display = "none";
        }
    })

}

submit()


