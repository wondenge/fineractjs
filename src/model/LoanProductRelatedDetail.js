  

import ApiClient from '../ApiClient';
import MonetaryCurrency from './MonetaryCurrency';
import Money from './Money';

/**
 * The LoanProductRelatedDetail model module.
 * @module model/LoanProductRelatedDetail
 * @version 1.0
 */
class LoanProductRelatedDetail {
    /**
     * Constructs a new <code>LoanProductRelatedDetail</code>.
     * @alias module:model/LoanProductRelatedDetail
     */
    constructor() { 
        
        LoanProductRelatedDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanProductRelatedDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanProductRelatedDetail} obj Optional instance to populate.
     * @return {module:model/LoanProductRelatedDetail} The populated <code>LoanProductRelatedDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanProductRelatedDetail();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = MonetaryCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('principal')) {
                obj['principal'] = Money.constructFromObject(data['principal']);
            }
            if (data.hasOwnProperty('nominalInterestRatePerPeriod')) {
                obj['nominalInterestRatePerPeriod'] = ApiClient.convertToType(data['nominalInterestRatePerPeriod'], 'Number');
            }
            if (data.hasOwnProperty('interestPeriodFrequencyType')) {
                obj['interestPeriodFrequencyType'] = ApiClient.convertToType(data['interestPeriodFrequencyType'], 'String');
            }
            if (data.hasOwnProperty('annualNominalInterestRate')) {
                obj['annualNominalInterestRate'] = ApiClient.convertToType(data['annualNominalInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('interestMethod')) {
                obj['interestMethod'] = ApiClient.convertToType(data['interestMethod'], 'String');
            }
            if (data.hasOwnProperty('interestCalculationPeriodMethod')) {
                obj['interestCalculationPeriodMethod'] = ApiClient.convertToType(data['interestCalculationPeriodMethod'], 'String');
            }
            if (data.hasOwnProperty('allowPartialPeriodInterestCalcualtion')) {
                obj['allowPartialPeriodInterestCalcualtion'] = ApiClient.convertToType(data['allowPartialPeriodInterestCalcualtion'], 'Boolean');
            }
            if (data.hasOwnProperty('repayEvery')) {
                obj['repayEvery'] = ApiClient.convertToType(data['repayEvery'], 'Number');
            }
            if (data.hasOwnProperty('repaymentPeriodFrequencyType')) {
                obj['repaymentPeriodFrequencyType'] = ApiClient.convertToType(data['repaymentPeriodFrequencyType'], 'String');
            }
            if (data.hasOwnProperty('numberOfRepayments')) {
                obj['numberOfRepayments'] = ApiClient.convertToType(data['numberOfRepayments'], 'Number');
            }
            if (data.hasOwnProperty('graceOnPrincipalPayment')) {
                obj['graceOnPrincipalPayment'] = ApiClient.convertToType(data['graceOnPrincipalPayment'], 'Number');
            }
            if (data.hasOwnProperty('graceOnInterestPayment')) {
                obj['graceOnInterestPayment'] = ApiClient.convertToType(data['graceOnInterestPayment'], 'Number');
            }
            if (data.hasOwnProperty('amortizationMethod')) {
                obj['amortizationMethod'] = ApiClient.convertToType(data['amortizationMethod'], 'String');
            }
            if (data.hasOwnProperty('inArrearsTolerance')) {
                obj['inArrearsTolerance'] = Money.constructFromObject(data['inArrearsTolerance']);
            }
            if (data.hasOwnProperty('graceOnArrearsAgeing')) {
                obj['graceOnArrearsAgeing'] = ApiClient.convertToType(data['graceOnArrearsAgeing'], 'Number');
            }
            if (data.hasOwnProperty('equalAmortization')) {
                obj['equalAmortization'] = ApiClient.convertToType(data['equalAmortization'], 'Boolean');
            }
            if (data.hasOwnProperty('interestRecalculationEnabled')) {
                obj['interestRecalculationEnabled'] = ApiClient.convertToType(data['interestRecalculationEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('graceOnDueDate')) {
                obj['graceOnDueDate'] = ApiClient.convertToType(data['graceOnDueDate'], 'Number');
            }
            if (data.hasOwnProperty('arrearsTolerance')) {
                obj['arrearsTolerance'] = ApiClient.convertToType(data['arrearsTolerance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MonetaryCurrency} currency
 */
LoanProductRelatedDetail.prototype['currency'] = undefined;

/**
 * @member {module:model/Money} principal
 */
LoanProductRelatedDetail.prototype['principal'] = undefined;

/**
 * @member {Number} nominalInterestRatePerPeriod
 */
LoanProductRelatedDetail.prototype['nominalInterestRatePerPeriod'] = undefined;

/**
 * @member {module:model/LoanProductRelatedDetail.InterestPeriodFrequencyTypeEnum} interestPeriodFrequencyType
 */
LoanProductRelatedDetail.prototype['interestPeriodFrequencyType'] = undefined;

/**
 * @member {Number} annualNominalInterestRate
 */
LoanProductRelatedDetail.prototype['annualNominalInterestRate'] = undefined;

/**
 * @member {module:model/LoanProductRelatedDetail.InterestMethodEnum} interestMethod
 */
LoanProductRelatedDetail.prototype['interestMethod'] = undefined;

/**
 * @member {module:model/LoanProductRelatedDetail.InterestCalculationPeriodMethodEnum} interestCalculationPeriodMethod
 */
LoanProductRelatedDetail.prototype['interestCalculationPeriodMethod'] = undefined;

/**
 * @member {Boolean} allowPartialPeriodInterestCalcualtion
 */
LoanProductRelatedDetail.prototype['allowPartialPeriodInterestCalcualtion'] = undefined;

/**
 * @member {Number} repayEvery
 */
LoanProductRelatedDetail.prototype['repayEvery'] = undefined;

/**
 * @member {module:model/LoanProductRelatedDetail.RepaymentPeriodFrequencyTypeEnum} repaymentPeriodFrequencyType
 */
LoanProductRelatedDetail.prototype['repaymentPeriodFrequencyType'] = undefined;

/**
 * @member {Number} numberOfRepayments
 */
LoanProductRelatedDetail.prototype['numberOfRepayments'] = undefined;

/**
 * @member {Number} graceOnPrincipalPayment
 */
LoanProductRelatedDetail.prototype['graceOnPrincipalPayment'] = undefined;

/**
 * @member {Number} graceOnInterestPayment
 */
LoanProductRelatedDetail.prototype['graceOnInterestPayment'] = undefined;

/**
 * @member {module:model/LoanProductRelatedDetail.AmortizationMethodEnum} amortizationMethod
 */
LoanProductRelatedDetail.prototype['amortizationMethod'] = undefined;

/**
 * @member {module:model/Money} inArrearsTolerance
 */
LoanProductRelatedDetail.prototype['inArrearsTolerance'] = undefined;

/**
 * @member {Number} graceOnArrearsAgeing
 */
LoanProductRelatedDetail.prototype['graceOnArrearsAgeing'] = undefined;

/**
 * @member {Boolean} equalAmortization
 */
LoanProductRelatedDetail.prototype['equalAmortization'] = undefined;

/**
 * @member {Boolean} interestRecalculationEnabled
 */
LoanProductRelatedDetail.prototype['interestRecalculationEnabled'] = undefined;

/**
 * @member {Number} graceOnDueDate
 */
LoanProductRelatedDetail.prototype['graceOnDueDate'] = undefined;

/**
 * @member {Number} arrearsTolerance
 */
LoanProductRelatedDetail.prototype['arrearsTolerance'] = undefined;





/**
 * Allowed values for the <code>interestPeriodFrequencyType</code> property.
 * @enum {String}
 * @readonly
 */
LoanProductRelatedDetail['InterestPeriodFrequencyTypeEnum'] = {

    /**
     * value: "DAYS"
     * @const
     */
    "DAYS": "DAYS",

    /**
     * value: "WEEKS"
     * @const
     */
    "WEEKS": "WEEKS",

    /**
     * value: "MONTHS"
     * @const
     */
    "MONTHS": "MONTHS",

    /**
     * value: "YEARS"
     * @const
     */
    "YEARS": "YEARS",

    /**
     * value: "WHOLE_TERM"
     * @const
     */
    "WHOLE_TERM": "WHOLE_TERM",

    /**
     * value: "INVALID"
     * @const
     */
    "INVALID": "INVALID"
};


/**
 * Allowed values for the <code>interestMethod</code> property.
 * @enum {String}
 * @readonly
 */
LoanProductRelatedDetail['InterestMethodEnum'] = {

    /**
     * value: "DECLINING_BALANCE"
     * @const
     */
    "DECLINING_BALANCE": "DECLINING_BALANCE",

    /**
     * value: "FLAT"
     * @const
     */
    "FLAT": "FLAT",

    /**
     * value: "INVALID"
     * @const
     */
    "INVALID": "INVALID"
};


/**
 * Allowed values for the <code>interestCalculationPeriodMethod</code> property.
 * @enum {String}
 * @readonly
 */
LoanProductRelatedDetail['InterestCalculationPeriodMethodEnum'] = {

    /**
     * value: "DAILY"
     * @const
     */
    "DAILY": "DAILY",

    /**
     * value: "SAME_AS_REPAYMENT_PERIOD"
     * @const
     */
    "SAME_AS_REPAYMENT_PERIOD": "SAME_AS_REPAYMENT_PERIOD",

    /**
     * value: "INVALID"
     * @const
     */
    "INVALID": "INVALID"
};


/**
 * Allowed values for the <code>repaymentPeriodFrequencyType</code> property.
 * @enum {String}
 * @readonly
 */
LoanProductRelatedDetail['RepaymentPeriodFrequencyTypeEnum'] = {

    /**
     * value: "DAYS"
     * @const
     */
    "DAYS": "DAYS",

    /**
     * value: "WEEKS"
     * @const
     */
    "WEEKS": "WEEKS",

    /**
     * value: "MONTHS"
     * @const
     */
    "MONTHS": "MONTHS",

    /**
     * value: "YEARS"
     * @const
     */
    "YEARS": "YEARS",

    /**
     * value: "WHOLE_TERM"
     * @const
     */
    "WHOLE_TERM": "WHOLE_TERM",

    /**
     * value: "INVALID"
     * @const
     */
    "INVALID": "INVALID"
};


/**
 * Allowed values for the <code>amortizationMethod</code> property.
 * @enum {String}
 * @readonly
 */
LoanProductRelatedDetail['AmortizationMethodEnum'] = {

    /**
     * value: "EQUAL_PRINCIPAL"
     * @const
     */
    "EQUAL_PRINCIPAL": "EQUAL_PRINCIPAL",

    /**
     * value: "EQUAL_INSTALLMENTS"
     * @const
     */
    "EQUAL_INSTALLMENTS": "EQUAL_INSTALLMENTS",

    /**
     * value: "INVALID"
     * @const
     */
    "INVALID": "INVALID"
};



export default LoanProductRelatedDetail;

