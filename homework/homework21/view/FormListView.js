class FormListView{
static FORM = `<form class="addTaskForm">
    <div class="row">
        <div class="ten columns">
            <input
                type="text"
                name="title"
                id="taskNameInput"
                class="u-full-width"
            />
            <span id="errorContainer" class="error hidden"></span>
        </div>
        <div class="two columns">
            <button type="submit" id="addBtn" class="u-full-width">
                Add
            </button>
        </div>
    </div>
</form>`;
static BUTTON_SELECTOR ='#addBtn';
static FORM_SELECTOR = '.addTaskForm';
static INPUT_SELECTOR = '#taskNameInput';
    
constructor(config = {}){
        
    console.log('hellou');
    this.$elf = $(FormListView.FORM)
    .on( 'submit', (e) => 
            
            {e.preventDefault(); console.log('hiiiiie'); 
            const $value = ($(FormListView.INPUT_SELECTOR)).val();
            const $newTask = {
                title: $value,
                isDone: false, 
            };
             config.onAddTask($newTask);
            }
        );      
    
    }         
}