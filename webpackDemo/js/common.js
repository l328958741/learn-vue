export default {
    sum(...args){
        let a = 0;
        args.forEach(item => {
            a += item;
        })

        return a;
    }
}