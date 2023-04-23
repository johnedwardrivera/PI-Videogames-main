const validate = (input) => { 
    const errors = {};
    if (!input.name) {
        if (typeof input.name == 'string') {
            errors.name = 'The entered value is not valid'
        }
        errors.name = 'This field is required'
    }
    if (!input.description || input.description.length < 30) {
        errors.description = 'Please, enter a mininum description of 30 characters'

    }
    if (!input.platforms.length) {
        errors.platforms = 'This field is required'
    }
    if (!input.image.includes("https://" || "http://") || !input.image.includes(".jpg" || ".png" || ".gif")) { 
    errors.image = "Enter a valid URL (.jpg, .png, .gif)"
    } 
    if(!input.released){  
        if(!/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(input.released)){ 
            errors.released = "Error"       
        } 
        if(!input.rating || input.rating < 0 || input.rating > 5){ 
            errors.rating = "The rating must be < 0 & > 5..."
        
        } 
        if(!input.genres.length){ 
            errors.genres = "This field is required"
        
        }
    } 
    return errors
}
export default validate;