

import ApiClient from '../ApiClient';
import Charge from './Charge';
import LoanProductConfigurableAttributes from './LoanProductConfigurableAttributes';
import LoanProductFloatingRates from './LoanProductFloatingRates';
import LoanProductGuaranteeDetails from './LoanProductGuaranteeDetails';
import LoanProductInterestRecalculationDetails from './LoanProductInterestRecalculationDetails';
import LoanProductRelatedDetail from './LoanProductRelatedDetail';
import LoanTransactionProcessingStrategy from './LoanTransactionProcessingStrategy';
import MonetaryCurrency from './MonetaryCurrency';
import Money from './Money';
import Rate from './Rate';

/**
 * The LoanProduct model module.
 * @module model/LoanProduct
 * @version 1.0
 */
class LoanProduct {
    /**
     * Constructs a new <code>LoanProduct</code>.
     * @alias module:model/LoanProduct
     */
    constructor() { 
        
        LoanProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanProduct} obj Optional instance to populate.
     * @return {module:model/LoanProduct} The populated <code>LoanProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanProduct();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('rates')) {
                obj['rates'] = ApiClient.convertToType(data['rates'], [Rate]);
            }
            if (data.hasOwnProperty('loanProductRelatedDetail')) {
                obj['loanProductRelatedDetail'] = LoanProductRelatedDetail.constructFromObject(data['loanProductRelatedDetail']);
            }
            if (data.hasOwnProperty('includeInBorrowerCycle')) {
                obj['includeInBorrowerCycle'] = ApiClient.convertToType(data['includeInBorrowerCycle'], 'Boolean');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('closeDate')) {
                obj['closeDate'] = ApiClient.convertToType(data['closeDate'], 'Date');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('minimumDaysBetweenDisbursalAndFirstRepayment')) {
                obj['minimumDaysBetweenDisbursalAndFirstRepayment'] = ApiClient.convertToType(data['minimumDaysBetweenDisbursalAndFirstRepayment'], 'Number');
            }
            if (data.hasOwnProperty('productInterestRecalculationDetails')) {
                obj['productInterestRecalculationDetails'] = LoanProductInterestRecalculationDetails.constructFromObject(data['productInterestRecalculationDetails']);
            }
            if (data.hasOwnProperty('loanProductGuaranteeDetails')) {
                obj['loanProductGuaranteeDetails'] = LoanProductGuaranteeDetails.constructFromObject(data['loanProductGuaranteeDetails']);
            }
            if (data.hasOwnProperty('principalThresholdForLastInstallment')) {
                obj['principalThresholdForLastInstallment'] = ApiClient.convertToType(data['principalThresholdForLastInstallment'], 'Number');
            }
            if (data.hasOwnProperty('installmentAmountInMultiplesOf')) {
                obj['installmentAmountInMultiplesOf'] = ApiClient.convertToType(data['installmentAmountInMultiplesOf'], 'Number');
            }
            if (data.hasOwnProperty('floatingRates')) {
                obj['floatingRates'] = LoanProductFloatingRates.constructFromObject(data['floatingRates']);
            }
            if (data.hasOwnProperty('syncExpectedWithDisbursementDate')) {
                obj['syncExpectedWithDisbursementDate'] = ApiClient.convertToType(data['syncExpectedWithDisbursementDate'], 'Boolean');
            }
            if (data.hasOwnProperty('linkedToFloatingInterestRate')) {
                obj['linkedToFloatingInterestRate'] = ApiClient.convertToType(data['linkedToFloatingInterestRate'], 'Boolean');
            }
            if (data.hasOwnProperty('equalAmortization')) {
                obj['equalAmortization'] = ApiClient.convertToType(data['equalAmortization'], 'Boolean');
            }
            if (data.hasOwnProperty('interestRecalculationEnabled')) {
                obj['interestRecalculationEnabled'] = ApiClient.convertToType(data['interestRecalculationEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('minNominalInterestRatePerPeriod')) {
                obj['minNominalInterestRatePerPeriod'] = ApiClient.convertToType(data['minNominalInterestRatePerPeriod'], 'Number');
            }
            if (data.hasOwnProperty('maxNominalInterestRatePerPeriod')) {
                obj['maxNominalInterestRatePerPeriod'] = ApiClient.convertToType(data['maxNominalInterestRatePerPeriod'], 'Number');
            }
            if (data.hasOwnProperty('minNumberOfRepayments')) {
                obj['minNumberOfRepayments'] = ApiClient.convertToType(data['minNumberOfRepayments'], 'Number');
            }
            if (data.hasOwnProperty('maxNumberOfRepayments')) {
                obj['maxNumberOfRepayments'] = ApiClient.convertToType(data['maxNumberOfRepayments'], 'Number');
            }
            if (data.hasOwnProperty('multiDisburseLoan')) {
                obj['multiDisburseLoan'] = ApiClient.convertToType(data['multiDisburseLoan'], 'Boolean');
            }
            if (data.hasOwnProperty('repaymentStrategy')) {
                obj['repaymentStrategy'] = LoanTransactionProcessingStrategy.constructFromObject(data['repaymentStrategy']);
            }
            if (data.hasOwnProperty('accountingType')) {
                obj['accountingType'] = ApiClient.convertToType(data['accountingType'], 'Number');
            }
            if (data.hasOwnProperty('loanProductCharges')) {
                obj['loanProductCharges'] = ApiClient.convertToType(data['loanProductCharges'], [Charge]);
            }
            if (data.hasOwnProperty('loanProductConfigurableAttributes')) {
                obj['loanProductConfigurableAttributes'] = LoanProductConfigurableAttributes.constructFromObject(data['loanProductConfigurableAttributes']);
            }
            if (data.hasOwnProperty('accountingDisabled')) {
                obj['accountingDisabled'] = ApiClient.convertToType(data['accountingDisabled'], 'Boolean');
            }
            if (data.hasOwnProperty('cashBasedAccountingEnabled')) {
                obj['cashBasedAccountingEnabled'] = ApiClient.convertToType(data['cashBasedAccountingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('accrualBasedAccountingEnabled')) {
                obj['accrualBasedAccountingEnabled'] = ApiClient.convertToType(data['accrualBasedAccountingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('upfrontAccrualAccountingEnabled')) {
                obj['upfrontAccrualAccountingEnabled'] = ApiClient.convertToType(data['upfrontAccrualAccountingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('periodicAccrualAccountingEnabled')) {
                obj['periodicAccrualAccountingEnabled'] = ApiClient.convertToType(data['periodicAccrualAccountingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('principalAmount')) {
                obj['principalAmount'] = Money.constructFromObject(data['principalAmount']);
            }
            if (data.hasOwnProperty('minPrincipalAmount')) {
                obj['minPrincipalAmount'] = Money.constructFromObject(data['minPrincipalAmount']);
            }
            if (data.hasOwnProperty('maxPrincipalAmount')) {
                obj['maxPrincipalAmount'] = Money.constructFromObject(data['maxPrincipalAmount']);
            }
            if (data.hasOwnProperty('nominalInterestRatePerPeriod')) {
                obj['nominalInterestRatePerPeriod'] = ApiClient.convertToType(data['nominalInterestRatePerPeriod'], 'Number');
            }
            if (data.hasOwnProperty('interestPeriodFrequencyType')) {
                obj['interestPeriodFrequencyType'] = ApiClient.convertToType(data['interestPeriodFrequencyType'], 'String');
            }
            if (data.hasOwnProperty('numberOfRepayments')) {
                obj['numberOfRepayments'] = ApiClient.convertToType(data['numberOfRepayments'], 'Number');
            }
            if (data.hasOwnProperty('holdGuaranteeFundsEnabled')) {
                obj['holdGuaranteeFundsEnabled'] = ApiClient.convertToType(data['holdGuaranteeFundsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('arrearsBasedOnOriginalSchedule')) {
                obj['arrearsBasedOnOriginalSchedule'] = ApiClient.convertToType(data['arrearsBasedOnOriginalSchedule'], 'Boolean');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = MonetaryCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
LoanProduct.prototype['id'] = undefined;

/**
 * @member {String} shortName
 */
LoanProduct.prototype['shortName'] = undefined;

/**
 * @member {Array.<module:model/Rate>} rates
 */
LoanProduct.prototype['rates'] = undefined;

/**
 * @member {module:model/LoanProductRelatedDetail} loanProductRelatedDetail
 */
LoanProduct.prototype['loanProductRelatedDetail'] = undefined;

/**
 * @member {Boolean} includeInBorrowerCycle
 */
LoanProduct.prototype['includeInBorrowerCycle'] = undefined;

/**
 * @member {Date} startDate
 */
LoanProduct.prototype['startDate'] = undefined;

/**
 * @member {Date} closeDate
 */
LoanProduct.prototype['closeDate'] = undefined;

/**
 * @member {String} externalId
 */
LoanProduct.prototype['externalId'] = undefined;

/**
 * @member {Number} minimumDaysBetweenDisbursalAndFirstRepayment
 */
LoanProduct.prototype['minimumDaysBetweenDisbursalAndFirstRepayment'] = undefined;

/**
 * @member {module:model/LoanProductInterestRecalculationDetails} productInterestRecalculationDetails
 */
LoanProduct.prototype['productInterestRecalculationDetails'] = undefined;

/**
 * @member {module:model/LoanProductGuaranteeDetails} loanProductGuaranteeDetails
 */
LoanProduct.prototype['loanProductGuaranteeDetails'] = undefined;

/**
 * @member {Number} principalThresholdForLastInstallment
 */
LoanProduct.prototype['principalThresholdForLastInstallment'] = undefined;

/**
 * @member {Number} installmentAmountInMultiplesOf
 */
LoanProduct.prototype['installmentAmountInMultiplesOf'] = undefined;

/**
 * @member {module:model/LoanProductFloatingRates} floatingRates
 */
LoanProduct.prototype['floatingRates'] = undefined;

/**
 * @member {Boolean} syncExpectedWithDisbursementDate
 */
LoanProduct.prototype['syncExpectedWithDisbursementDate'] = undefined;

/**
 * @member {Boolean} linkedToFloatingInterestRate
 */
LoanProduct.prototype['linkedToFloatingInterestRate'] = undefined;

/**
 * @member {Boolean} equalAmortization
 */
LoanProduct.prototype['equalAmortization'] = undefined;

/**
 * @member {Boolean} interestRecalculationEnabled
 */
LoanProduct.prototype['interestRecalculationEnabled'] = undefined;

/**
 * @member {Number} minNominalInterestRatePerPeriod
 */
LoanProduct.prototype['minNominalInterestRatePerPeriod'] = undefined;

/**
 * @member {Number} maxNominalInterestRatePerPeriod
 */
LoanProduct.prototype['maxNominalInterestRatePerPeriod'] = undefined;

/**
 * @member {Number} minNumberOfRepayments
 */
LoanProduct.prototype['minNumberOfRepayments'] = undefined;

/**
 * @member {Number} maxNumberOfRepayments
 */
LoanProduct.prototype['maxNumberOfRepayments'] = undefined;

/**
 * @member {Boolean} multiDisburseLoan
 */
LoanProduct.prototype['multiDisburseLoan'] = undefined;

/**
 * @member {module:model/LoanTransactionProcessingStrategy} repaymentStrategy
 */
LoanProduct.prototype['repaymentStrategy'] = undefined;

/**
 * @member {Number} accountingType
 */
LoanProduct.prototype['accountingType'] = undefined;

/**
 * @member {Array.<module:model/Charge>} loanProductCharges
 */
LoanProduct.prototype['loanProductCharges'] = undefined;

/**
 * @member {module:model/LoanProductConfigurableAttributes} loanProductConfigurableAttributes
 */
LoanProduct.prototype['loanProductConfigurableAttributes'] = undefined;

/**
 * @member {Boolean} accountingDisabled
 */
LoanProduct.prototype['accountingDisabled'] = undefined;

/**
 * @member {Boolean} cashBasedAccountingEnabled
 */
LoanProduct.prototype['cashBasedAccountingEnabled'] = undefined;

/**
 * @member {Boolean} accrualBasedAccountingEnabled
 */
LoanProduct.prototype['accrualBasedAccountingEnabled'] = undefined;

/**
 * @member {Boolean} upfrontAccrualAccountingEnabled
 */
LoanProduct.prototype['upfrontAccrualAccountingEnabled'] = undefined;

/**
 * @member {Boolean} periodicAccrualAccountingEnabled
 */
LoanProduct.prototype['periodicAccrualAccountingEnabled'] = undefined;

/**
 * @member {module:model/Money} principalAmount
 */
LoanProduct.prototype['principalAmount'] = undefined;

/**
 * @member {module:model/Money} minPrincipalAmount
 */
LoanProduct.prototype['minPrincipalAmount'] = undefined;

/**
 * @member {module:model/Money} maxPrincipalAmount
 */
LoanProduct.prototype['maxPrincipalAmount'] = undefined;

/**
 * @member {Number} nominalInterestRatePerPeriod
 */
LoanProduct.prototype['nominalInterestRatePerPeriod'] = undefined;

/**
 * @member {module:model/LoanProduct.InterestPeriodFrequencyTypeEnum} interestPeriodFrequencyType
 */
LoanProduct.prototype['interestPeriodFrequencyType'] = undefined;

/**
 * @member {Number} numberOfRepayments
 */
LoanProduct.prototype['numberOfRepayments'] = undefined;

/**
 * @member {Boolean} holdGuaranteeFundsEnabled
 */
LoanProduct.prototype['holdGuaranteeFundsEnabled'] = undefined;

/**
 * @member {Boolean} arrearsBasedOnOriginalSchedule
 */
LoanProduct.prototype['arrearsBasedOnOriginalSchedule'] = undefined;

/**
 * @member {module:model/MonetaryCurrency} currency
 */
LoanProduct.prototype['currency'] = undefined;

/**
 * @member {Boolean} new
 */
LoanProduct.prototype['new'] = undefined;





/**
 * Allowed values for the <code>interestPeriodFrequencyType</code> property.
 * @enum {String}
 * @readonly
 */
LoanProduct['InterestPeriodFrequencyTypeEnum'] = {

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



export default LoanProduct;

