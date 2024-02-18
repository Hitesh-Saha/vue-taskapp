import { addNewProject, addNewTask } from "@/services/firebase"

const projectActions = {
    addProject(context,payload) {
        addNewProject(payload).then((res) => {
            if(res !== null) {
                context.commit('addProject', {
                    id: res,
                    title: payload.title,
                    description: payload.description,
                    tasks: payload.tasks
                })
                return true
            }
        })
        .catch(err => {
            console.log(err)
        })
    },
    addTask(context, payload) {
        addNewTask(payload).then((res) => {
            if(res !== null) {
                // context.commit('addTask', {
                //     id: res,
                //     title: payload.title,
                //     description: payload.description,
                //     tasks: payload.tasks
                // })
                return true
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export default projectActions