let X1='logFC';
let Y1='FDR';
let X2='log_AveExpr';
let Y2='logFC';

let Y_LABEL_SCATTER1 = 'FDR';
let X_LABEL_SCATTER1 = 'logFC';

let Y_LABEL_SCATTER2 = 'logFC';
let X_LABEL_SCATTER2 = 'AveExpr';

let FLIP_Y1=true;
let FLIP_Y2=false;

let PLOT_WIDTH=550;
let PLOT_HEIGHT=400;

let PROJECT_TITLE='WT-S-I';
let TAB_TITLE='WT-S-I'

let _margin_1 = 0.01;
let _margin_2 = 0.01;

let _border_1_x = 0;
let _border_1_y = 0;

let _border_2_x = 0;
let _border_2_y = 0;

let BOX_PLOT_COLS_1 = ['S1','S2','S3']
let BOX_PLOT_COLS_2 = ['I1','I2','I3']

//need to manually change conditions in
//xs table (index.html) and scatter plot app (app.js)
let CONDITION_1 = 'SOL'
let CONDITION_2 = 'INSOL'


let COLOR_SELECTION_TABLE = 'orange';
let COLOR_SELECTION_CIRCLE = 'orange';

let Y_LABEL_BARPLOT = 'Intensity';

let File_1 = 'indata_WT_S_I.csv';
let File_2 = 'indata2_WT_S_I.csv';


//these are th columns to show from file n1
//positions og Gene_acc','Gene_id' must not change
let COLUMNS_TO_TABULATE = ['Gene_acc','Gene_id','logFC','log_AveExpr','FDR','Desc'];