'use strict'

const Convocatoria = use('App/Models/Convocatoria');
const Staff = use('App/Models/StaffRequirement');

class ConvocatoriaPublicController {

  index = async ({ request }) => {
    let { page } = request.all();
    let convocatoria = Convocatoria.query()
      .where('estado', 'PUBLICADO')
    // get 
    convocatoria = await convocatoria.paginate(page || 1, 20);
    // response 
    return {
      success: true,
      code: 201,
      convocatoria
    }
  }

  staffRequirement = async ({ params, request }) => {
    let { page } = request.all();
    let staff = await Staff.query()
      .join('convocatorias as con', 'con.id', 'staff_requirements.convocatoria_id')
      .join('dependencias as dep', 'dep.id', 'staff_requirements.dependencia_id')
      .join('perfil_laborals as per', 'per.id', 'staff_requirements.perfil_laboral_id')
      .select('staff_requirements.*', 'dep.nombre as departamento', 'per.nombre as perfil_laboral')
      .where('con.id', params.id)
      .paginate(page || 1, 20);
    // response 
    return {
      success: true,
      status: 201,
      staff
    }
  }

}

module.exports = ConvocatoriaPublicController