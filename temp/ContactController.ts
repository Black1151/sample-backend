import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ContactValidator from 'App/Validators/ContactValidator'

export default class ContactController {
  public async submit({ request, response }: HttpContextContract) {
    // Validate the form data using the ContactValidator
    const validatedData = await request.validate(ContactValidator)

    // Handle the form submission
    // ...

    return response.status(200).json({ message: 'Form submitted successfully' })
  }
}
