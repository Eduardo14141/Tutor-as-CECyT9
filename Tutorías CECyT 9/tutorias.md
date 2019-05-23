# Rutas Tutorías
**Nota:** Todos los outputs deben llevar la propiedad:
 - _status_: **string**, existent, _not valid_, error, empty, unauthorized, success
 - property: **string**. SÓLO EN CASO DE SER NOT VALID.

## login_student
El alumno inicia sesión en el sistema
### Input
- _user_: **string**, boleta del alumno.
 ### Output
- status

## login_admin
El administrador inicia sesión en el sistema
### Input
- _user_admin_: **string**, usuario de administrador.
- _pass:admin_: **string**, contraseña de administrador
 ### Output
- status


##enroll-student
### Input
- _student_:**[json]**
	-id_student_:**int**, id del alumno
    - _name_: **string**, nombre del alumno.
	- _f-lastname_: **string**, apellido paterno del alumno.
	- _m-lastname_: **string**, apellido materno del alumno.
    - _boleta_: **int**, boleta del alumno.
    - _group_: **string**, grupo actual del alumno.
    - _sex_: **boolean**, sexo del alumno.
    - _email_: **string**, correo del alumno.
    - _telephobe_:**string**, telefono del alumno.

###output
- _student_:**[json]**
    - _name_: **string**, nombre del alumno.
	- _f-lastname_: **string**, apellido paterno del alumno.
	- _m-lastname_: **string**, apellido materno del alumno.
    - _boleta_: **int**, boleta del alumno.
    - _group_: **string**, grupo actual del alumno.
    - _sex_: **boolean**, sexo del alumno.

## enroll-tutorships
### input
- _tutorships_: **array[int]**, ids de las tutoría a inscribir.

### output
- _overlap_: **boolean**
	- En caso de que haya traslape
	- _overlaps_: **[json]**:
		- _id_tutorships_: **array[int]**: Contiene los id de las tutorías que tienen traslape.

## tutorships
### input
- _tutorships_: **[json]**
	- _id_tutorship_: **int**, id de la tutoría.
	- _tutorship_name_: **string**, nombre de la tutoría.
	- _professor_: **string**, nombre del profesor.
	- _schedules_days: **[json]**, horarios de la tutoría.
(All the 24 hrs)
		- _monday_
		- _tuesday_
		- _wednesday_
		- _thursday_
		- _friday_
### output
- _tutorships_: **[json]**
	- _tutorship_name_: **string**, nombre de la tutoría.
	- _professor_: **string**, nombre del profesor.
	- _schedules_days: **[json]**, horarios de la tutoría.
		- _monday_
		- _tuesday_
		- _wednesday_
		- _thursday_
		- _friday_

## inscription_comprobant
### input
- _id_student_: **int**, id del alumno
    - _name_: **string**, nombre del alumno.
	- _f-lastname_: **string**, apellido paterno del alumno.
	- _m-lastname_: **string**, apellido materno del alumno.
    - _boleta_: **int**, boleta del alumno.
    - _group_: **string**, grupo actual del alumno.

- _tutorships_: **[json]**
	- _tutorship_name_: **string**, nombre de la tutoría.
	- _professor_: **string**, nombre del profesor.
	- _schedules_days: **[json]**, horarios de la tutoría.
		- _monday_
		- _tuesday_
		- _wednesday_
		- _thursday_
		- _friday_
