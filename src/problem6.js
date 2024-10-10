function problem6(forms) {
    var dupli_list = new Array(forms.length).fill(0) ;
    var res_list = [] ;
    for (var i = 0;i < forms.length;i++) {
        for (var j = i + 1;j < forms.length;j++) {
            if (dupli_search(forms[i][1], forms[j][1]) == true) {
                if (dupli_list[i] == 0) {
                    res_list.push(forms[i][0]);
                    dupli_list[i] = 1;
                }
                if (dupli_list[j] == 0) {
                    res_list.push(forms[j][0]);
                    dupli_list[j] = 1;
                }
            }
        }
    }
    res_list.sort()
    return res_list;
}

function dupli_search(str1, str2) {
    for (var i = 0;i < str1.length - 1;i++) {
        for (var j = 0;j < str2.length - 1;j++) {
            if (str1.slice(i, i + 2) == str2.slice(j, j + 2)) {
                return true ;
            }
        }
    }
    return false ;
}

module.exports = problem6;
