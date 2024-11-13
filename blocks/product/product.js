export default function decorate(block){
    Array.from(block.children).forEach(function (row, i){
        row.classList.add('row-' + (i + 1));
        Array.from(row.children).forEach(function (col , index){
            col.classList.add('row-' + (i + 1) + '-col-' + (index + 1));
        })
    })
}