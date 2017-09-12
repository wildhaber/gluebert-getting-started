const dynamicLoad = [
    import('gluebert').then((m) => m.Gluebert),
    import('./js/modules').then((m) => m.MODULES),
    import('./js/data').then((m) => m.DATA),
];

Promise
    .all(dynamicLoad)
    .then(([Gluebert, Modules, Data]) => {
        const glubby = new Gluebert(Modules, Data);
        return glubby.start();
    });
