let simpleLevelPlan = `
...................... 
..#................#.. 
..#..............=.#.. 
..#.........o.o....#.. 
..#.@......#####...#.. 
..#####............#.. 
......#++++++++++++#.. 
......##############.. 
......................`;

class Level { 
    constructor(plan) { 
        let rows = plan.trim().split("\n").map(l => [...l]);  
        // This allows our example plan to start with a newline so that all the lines are directly below each other. There mainingstring is split on newline characters,and each line is spread into an array, producing arrays of characters
        this.height = rows.length; 
        this.width = rows[0].length; 
        this.startActors = [];
        this.rows = rows.map((row, y) => { 
            return row.map((ch, x) => { 
                let type = levelChars[ch]; 
                if (typeof type == "string") return type; 
                this.startActors.push( type.create(new Vec(x, y), ch)); 
                return "empty"; 
            }); 
        });
    }
}

class State { 
    constructor(level, actors, status) { 
        this.level = level;
        this.actors = actors; 
        this.status = status;
    }
    
    static start(level) { 
        return new State(level, level.startActors, "playing"); 
    }

    get player() { 
        return this.actors.find(a => a.type == "player"); 
    }
}
    






