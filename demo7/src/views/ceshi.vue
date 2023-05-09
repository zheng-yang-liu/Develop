<template>
    <div class="con">
        <Calendar :date="date" :events="events" @dayclick="dayclick"></Calendar>
    </div>
</template>

<script>
    import Calendar from 'vue-calendar-component';
    export default {
    name: 'App',
    components: {
        Calendar
    },
    data() {
        return {
        date: new Date(),
        events: [
            {
            date: new Date(2022, 4, 1),
            title: '收益1'
            },
            {
            date: new Date(2022, 4, 2),
            title: '收益2'
            },
            {
            date: new Date(2022, 4, 3),
            title: '收益3'
            }
        ]
        };
    },
    methods: {
        dayclick(date) {
        console.log(date);
        }
    }
    };
</script>