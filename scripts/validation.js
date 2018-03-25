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

const displyErrorMessage = function(message)
{
    let displyErrorMessage = document.getElementById('errorMessage');

    displyErrorMessage.innerHTML = message;

    return displyErrorMessage;
}