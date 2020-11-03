new Vue({
    el: '#app',

    data: {
        
        pageName: "Divinity Spells",
        hidePhys: true,
        hideMag: true,
        totalsumPhys: '',
        totalsumMag: '',
        spells: [
            { spell: 'Mosquito Swarm', physical: true, dmg: 10 },
            { spell: 'Decaying Touch', physical: true, dmg: 15 },
            { spell: 'Infect', physical: true, dmg: 2 },
            { spell: 'Tentacle Lash', physical: true, dmg: 30 },
            { spell: 'Black Shroud', physical: true, dmg: 5 },

            { spell: 'Electric Discharge', physical: false, dmg: 15 },
            { spell: 'Fireball', physical: false, dmg: 25 },
            { spell: 'Hail Strike', physical: false, dmg: 11 },
            { spell: 'Posion Dart', physical: false, dmg: 5 },
            { spell: 'Dimensional Bolt', physical: false, dmg: 15 }
        ],
        StatusClass: ['']
    },

    methods:{
        getPhys(){
            this.StatusClass = 'phys'
            this.hidePhys = false
            this.hideMag = true

        //Sum method from https://stackoverflow.com/questions/10221455/how-to-sum-json-array
            this.totalsumPhys = this.dmgPhys.reduce(function (sum, x) {
                return sum + x.dmg;
            }, 0);
        },

        getMag(){
            this.StatusClass = 'mag'
            this.hideMag = false
            this.hidePhys = true

            this.totalsumMag = this.dmgMag.reduce(function (sum, x) {
                return sum + x.dmg;
            }, 0);
        }
    },
    computed:{
        dmgPhys: function(){
            return this.spells.filter(spell => {
                return spell.physical == true
            })
        },
        dmgMag: function(){
            return this.spells.filter(spell => {
                return spell.physical == false
            })
        }
    },
    created(){
        
        
    }
})