var adr = "http://localhost:8080/api/"

export default class ModuleService {

    static myInstance = null;

    static getInstance() {
        if (ModuleService.myInstance == null) {
            ModuleService.myInstance =
                new ModuleService();
        }
        return this.myInstance;
    }

    createModuleForCourse = (courseId, module1) => 
        fetch( adr + `courses/${courseId}/modules`, {
            method: 'POST',
            body: JSON.stringify(module1),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    

    findAllModules = () =>
        fetch(adr +  "modules").then(response => response.json())

    findAllModulesForCourse = courseId =>
        fetch(adr +  `courses/${courseId}/modules`).then(response => response.json())

    updateModule  = (newModule) => 
        fetch( adr +  `modules/${newModule.id}`, {
            method: 'PUT',
            body: JSON.stringify(newModule),
            headers: {
                'content-type': 'application/json'
            }
        }).then()
    

    deleteModule = moduleId => 
        fetch( adr +  `modules/${moduleId}`, {
            method: 'DELETE'
        }).then(response => response.json())
    
}
