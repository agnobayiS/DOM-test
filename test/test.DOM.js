describe('this test', function () {
    it('should be able to set call cost ', function () {

        let setingsBill = billWithSettings();

        setingsBill.setCallCost(1.55);
        assert.equal(1.55, setingsBill.getCallCost());

        let setingsBill2 = billWithSettings();

        setingsBill2.setCallCost(0.55);
        assert.equal(0.55, setingsBill2.getCallCost());

    });
    it('should be able to set sms cost ', function () {

        let setingsBill = billWithSettings();

        setingsBill.setSmsCost(0.75);
        assert.equal(0.75, setingsBill.getSmsCost());

        let setingsBill2 = billWithSettings();

        setingsBill2.setSmsCost(0.25);
        assert.equal(0.25, setingsBill2.getSmsCost());

    });

    it('should be able to set critical level ', function () {

        let setingsBill = billWithSettings();

        setingsBill.setCritivalLevel(30);
        assert.equal(30, setingsBill.getCriticalLevel());


    });

    it('should be able to set warning level ', function () {

        let setingsBill = billWithSettings();

        setingsBill.setWarninglevel(20);
        assert.equal(20, setingsBill.getwarningLevel());


    });

    it('should be able to set warning level and critical ', function () {

        let setingsBill = billWithSettings();

        setingsBill.setWarninglevel(10);
        assert.equal(10, setingsBill.getwarningLevel());

        let setingsBill2 = billWithSettings();

        setingsBill2.setCritivalLevel(40);
        assert.equal(40, setingsBill2.getCriticalLevel());


    });

    describe('use values ', function () {
        it('should be able to use call cost ', function () {

            let setingsBill = billWithSettings();

            setingsBill.setCritivalLevel(20)
            setingsBill.setCallCost(2.00);
            assert.equal(2.00, setingsBill.getCallCost());


            setingsBill.makeCall();
            setingsBill.makeCall();
            setingsBill.makeCall();

            assert.equal(6, setingsBill.getTotalCost());
            assert.equal(6, setingsBill.getTotalCallCost());
            assert.equal(0, setingsBill.getTotalSmsCost());


        });

        it('should be able to use call cost for 2 calls at R1.50 per call ', function () {

            let setingsBill = billWithSettings();
            setingsBill.setCritivalLevel(20)
            setingsBill.setCallCost(1.50);
            assert.equal(1.50, setingsBill.getCallCost());


            setingsBill.makeCall();
            setingsBill.makeCall();


            assert.equal(3, setingsBill.getTotalCost());
            assert.equal(3, setingsBill.getTotalCallCost());
            assert.equal(0, setingsBill.getTotalSmsCost());


        });

        it('should be able to use sms cost for 2 sms at R0.50 per sms ', function () {

            let setingsBill = billWithSettings();

            setingsBill.setSmsCost(0.50);
            assert.equal(0.50, setingsBill.getSmsCost());

            setingsBill.setCritivalLevel(20)
            setingsBill.makeSms();
            setingsBill.makeSms();


            assert.equal(1.00, setingsBill.getTotalCost());
            assert.equal(0.00, setingsBill.getTotalCallCost());
            assert.equal(1.00, setingsBill.getTotalSmsCost());


        });

        it('should be able to use sms and call cost for 2 sms and 2 calls at R0.50 per sms and R1.50 per call', function () {

            let setingsBill = billWithSettings();

            setingsBill.setSmsCost(0.50);
            assert.equal(0.50, setingsBill.getSmsCost());

            setingsBill.setCallCost(1.50);
            assert.equal(1.50, setingsBill.getCallCost());

            setingsBill.setCritivalLevel(20)
            setingsBill.makeSms();
            setingsBill.makeSms();
            setingsBill.makeCall();
            setingsBill.makeCall();


            assert.equal(4.00, setingsBill.getTotalCost());
            assert.equal(3.00, setingsBill.getTotalCallCost());
            assert.equal(1.00, setingsBill.getTotalSmsCost());


        });
    });

    describe('warning and critical level ', function () {
        it('should return a class name of warning if warning level is reached ', function () {

            let setingsBill = billWithSettings();

            setingsBill.setSmsCost(0.50);
            setingsBill.setCallCost(4.50);
            setingsBill.setWarninglevel(10)
            setingsBill.setCritivalLevel(20)


            setingsBill.makeSms();
            setingsBill.makeSms();
            setingsBill.makeCall();
            setingsBill.makeCall();

            assert.equal("warning", setingsBill.totaClassName());

        });
        it('should return a class name of critical if critical level is reached ', function () {

            let setingsBill = billWithSettings();

            setingsBill.setSmsCost(0.50);
            setingsBill.setCallCost(4.50);
            setingsBill.setWarninglevel(10)
            setingsBill.getCriticalLevel(20)


            setingsBill.makeSms();
            setingsBill.makeSms();
            setingsBill.makeCall();
            setingsBill.makeCall();
            setingsBill.makeSms();
            setingsBill.makeSms();
            setingsBill.makeCall();
            setingsBill.makeCall();

            assert.equal("critical", setingsBill.totaClassName());

        });

        it('should stop the totalcost from incresing if critical if critical level is reached ', function () {

            let setingsBill = billWithSettings();

            setingsBill.setSmsCost(0.50);
            setingsBill.setCallCost(4.50);
            setingsBill.setWarninglevel(10)
            setingsBill.setCritivalLevel(20)


            setingsBill.makeSms();
            setingsBill.makeSms();
            setingsBill.makeCall();
            setingsBill.makeCall();
            setingsBill.makeSms();
            setingsBill.makeSms();
            setingsBill.makeCall();
            setingsBill.makeCall();

            assert.equal("critical", setingsBill.totaClassName());
            assert.equal(20, setingsBill.getTotalCost());

        });

    });


});
