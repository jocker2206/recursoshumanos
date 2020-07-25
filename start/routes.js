'use strict'

const Route = use('Route')

// custumizar group
const addGroup = (group) => {
  group.prefix('api');
  return group;
}


// ruta v1
addGroup(Route.group(() => {

  // Ruta de Postulantes
  Route.get('postulante', 'PostulanteController.index');
  Route.post('postulante', 'PostulanteController.store');

  // Ruta de Dependencias
  Route.get('dependencia', 'DependenciaController.index');
  Route.get('dependencia/:id', 'DependenciaController.show');
  Route.get('dependencia/:id/perfil_laboral', 'DependenciaController.perfilLaboral');

  // Ruta para el Perfil Laboral
  Route.resource('perfil_laboral', 'PerfilLaboralController').apiOnly();

  // Ruta para configurar el Perfil Laboral y Dependencia
  Route.resource('config_perfil_laboral', 'ConfigPerfilLaboralController').apiOnly();

  // Ruta Convocatoria
  Route.get('convocatoria', 'ConvocatoriaController.index').middleware(['entityId']);
  Route.post('convocatoria', 'ConvocatoriaController.store');
  Route.get('convocatoria/:id', 'ConvocatoriaController.show');
  Route.post('convocatoria/:id/update', 'ConvocatoriaController.update');
  Route.get('convocatoria/:id/actividades', 'ConvocatoriaController.actividades');
  Route.get('convocatoria/:id/staff_requirements', 'ConvocatoriaController.staffRequirements');

  // Ruta Requerimientos de Personal
  Route.get('staff_requirement', 'StaffRequirementController.index').middleware(['entityId']);
  Route.post('staff_requirement', 'StaffRequirementController.store');
  Route.get('staff_requirement/:id', 'StaffRequirementController.show');
  Route.post('staff_requirement/:id/update', 'StaffRequirementController.update');
  Route.get('staff_requirement/:id/requisitos', 'StaffRequirementController.requisitos');
  Route.get('staff_requirement/:id/etapa', 'StaffRequirementController.etapa');

  // Ruta de Requisitos para el requerimiento del personal
  Route.post('requisito', 'RequisitoController.store');

  // Ruta actividad
  Route.resource('actividad', 'ActividadController').apiOnly();


}));


