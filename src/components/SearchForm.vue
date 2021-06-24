<template>
    <div>
        <h1>{{title}}</h1>

        <form>
            <div class="form-group">
                <label for="formGroupExampleInput">{{ label }}</label>
                <input 
                type="text" 
                class="form-control" 
                v-model="search"
                id="formGroupExampleInput" 
                :placeholder="placeholder">
            </div>
        </form>

        <div class="form-check form-check-inline">
            <input 
            class="form-check-input" 
            type="radio" 
            v-model="available"
            id="inlineRadio1" 
            :value="true">
            <label class="form-check-label" for="inlineRadio1">Available</label>
        </div>
        <div class="form-check form-check-inline">
            <input 
            class="form-check-input" 
            type="radio" 
            v-model="available"
            id="inlineRadio2" 
            :value="false">
            <label class="form-check-label" for="inlineRadio2">Not Available</label>
        </div>
    </div>
</template>

<script type="text/javascript" src="../scripts/SearchForm.js"></script>