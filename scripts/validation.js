const isBlank = function(x)
{
    let isBlank = true;
    console.log("The Value of the input is: " + x);

    if (x)
    {
        isBlank = false;
    }
    return isBlank;
}

const displyErrorMessage = function()
{
    let displyErrorMessage = document.getElementById('errorMessage');

    displyErrorMessage.innerHTML = "Please enter a valid input";

    return displyErrorMessage;
}