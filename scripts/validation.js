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
    const displyErrorMessage = document.getElementById('errorMessage');

    field.classList.add('error--highlight');

    displyErrorMessage.innerHTML = message;

    return displyErrorMessage;
}

const removeErrorMessage = function(field)
{
    const errorMessage = document.getElementById('errorMessage');

    if (errorMessage)
    {
        field.classList.remove('error--highlight');
        errorMessage.innerHTML = "";
    }
}