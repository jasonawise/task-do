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

const displyErrorMessage = function(message, field)
{
    let displyErrorMessage = document.getElementById('errorMessage');

    field.classList.add('error--highlight');

    displyErrorMessage.innerHTML = message;

    return displyErrorMessage;
}