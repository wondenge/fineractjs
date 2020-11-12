

import ApiClient from '../ApiClient';
import ChargeData from './ChargeData';
import CurrencyData from './CurrencyData';
import EnumOptionData from './EnumOptionData';
import FundData from './FundData';
import LoanProductBorrowerCycleVariationData from './LoanProductBorrowerCycleVariationData';
import LoanProductConfigurableAttributes from './LoanProductConfigurableAttributes';
import LoanProductInterestRecalculationData from './LoanProductInterestRecalculationData';

/**
 * The LoanProductData model module.
 * @module model/LoanProductData
 * @version 1.0
 */
class LoanProductData {
    /**
     * Constructs a new <code>LoanProductData</code>.
     * @alias module:model/LoanProductData
     */
    constructor() { 
        
        LoanProductData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanProductData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanProductData} obj Optional instance to populate.
     * @return {module:model/LoanProductData} The populated <code>LoanProductData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanProductData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('fundId')) {
                obj['fundId'] = ApiClient.convertToType(data['fundId'], 'Number');
            }
            if (data.hasOwnProperty('fundName')) {
                obj['fundName'] = ApiClient.convertToType(data['fundName'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('closeDate')) {
                obj['closeDate'] = ApiClient.convertToType(data['closeDate'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = CurrencyData.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('principal')) {
                obj['principal'] = ApiClient.convertToType(data['principal'], 'Number');
            }
            if (data.hasOwnProperty('minPrincipal')) {
                obj['minPrincipal'] = ApiClient.convertToType(data['minPrincipal'], 'Number');
            }
            if (data.hasOwnProperty('maxPrincipal')) {
                obj['maxPrincipal'] = ApiClient.convertToType(data['maxPrincipal'], 'Number');
            }
            if (data.hasOwnProperty('numberOfRepayments')) {
                obj['numberOfRepayments'] = ApiClient.convertToType(data['numberOfRepayments'], 'Number');
            }
            if (data.hasOwnProperty('minNumberOfRepayments')) {
                obj['minNumberOfRepayments'] = ApiClient.convertToType(data['minNumberOfRepayments'], 'Number');
            }
            if (data.hasOwnProperty('maxNumberOfRepayments')) {
                obj['maxNumberOfRepayments'] = ApiClient.convertToType(data['maxNumberOfRepayments'], 'Number');
            }
            if (data.hasOwnProperty('repaymentEvery')) {
                obj['repaymentEvery'] = ApiClient.convertToType(data['repaymentEvery'], 'Number');
            }
            if (data.hasOwnProperty('repaymentFrequencyType')) {
                obj['repaymentFrequencyType'] = EnumOptionData.constructFromObject(data['repaymentFrequencyType']);
            }
            if (data.hasOwnProperty('interestRatePerPeriod')) {
                obj['interestRatePerPeriod'] = ApiClient.convertToType(data['interestRatePerPeriod'], 'Number');
            }
            if (data.hasOwnProperty('minInterestRatePerPeriod')) {
                obj['minInterestRatePerPeriod'] = ApiClient.convertToType(data['minInterestRatePerPeriod'], 'Number');
            }
            if (data.hasOwnProperty('maxInterestRatePerPeriod')) {
                obj['maxInterestRatePerPeriod'] = ApiClient.convertToType(data['maxInterestRatePerPeriod'], 'Number');
            }
            if (data.hasOwnProperty('interestRateFrequencyType')) {
                obj['interestRateFrequencyType'] = EnumOptionData.constructFromObject(data['interestRateFrequencyType']);
            }
            if (data.hasOwnProperty('annualInterestRate')) {
                obj['annualInterestRate'] = ApiClient.convertToType(data['annualInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('interestRateDifferential')) {
                obj['interestRateDifferential'] = ApiClient.convertToType(data['interestRateDifferential'], 'Number');
            }
            if (data.hasOwnProperty('minDifferentialLendingRate')) {
                obj['minDifferentialLendingRate'] = ApiClient.convertToType(data['minDifferentialLendingRate'], 'Number');
            }
            if (data.hasOwnProperty('defaultDifferentialLendingRate')) {
                obj['defaultDifferentialLendingRate'] = ApiClient.convertToType(data['defaultDifferentialLendingRate'], 'Number');
            }
            if (data.hasOwnProperty('maxDifferentialLendingRate')) {
                obj['maxDifferentialLendingRate'] = ApiClient.convertToType(data['maxDifferentialLendingRate'], 'Number');
            }
            if (data.hasOwnProperty('amortizationType')) {
                obj['amortizationType'] = EnumOptionData.constructFromObject(data['amortizationType']);
            }
            if (data.hasOwnProperty('interestType')) {
                obj['interestType'] = EnumOptionData.constructFromObject(data['interestType']);
            }
            if (data.hasOwnProperty('interestCalculationPeriodType')) {
                obj['interestCalculationPeriodType'] = EnumOptionData.constructFromObject(data['interestCalculationPeriodType']);
            }
            if (data.hasOwnProperty('allowPartialPeriodInterestCalcualtion')) {
                obj['allowPartialPeriodInterestCalcualtion'] = ApiClient.convertToType(data['allowPartialPeriodInterestCalcualtion'], 'Boolean');
            }
            if (data.hasOwnProperty('inArrearsTolerance')) {
                obj['inArrearsTolerance'] = ApiClient.convertToType(data['inArrearsTolerance'], 'Number');
            }
            if (data.hasOwnProperty('transactionProcessingStrategyId')) {
                obj['transactionProcessingStrategyId'] = ApiClient.convertToType(data['transactionProcessingStrategyId'], 'Number');
            }
            if (data.hasOwnProperty('transactionProcessingStrategyName')) {
                obj['transactionProcessingStrategyName'] = ApiClient.convertToType(data['transactionProcessingStrategyName'], 'String');
            }
            if (data.hasOwnProperty('graceOnPrincipalPayment')) {
                obj['graceOnPrincipalPayment'] = ApiClient.convertToType(data['graceOnPrincipalPayment'], 'Number');
            }
            if (data.hasOwnProperty('recurringMoratoriumOnPrincipalPeriods')) {
                obj['recurringMoratoriumOnPrincipalPeriods'] = ApiClient.convertToType(data['recurringMoratoriumOnPrincipalPeriods'], 'Number');
            }
            if (data.hasOwnProperty('graceOnInterestPayment')) {
                obj['graceOnInterestPayment'] = ApiClient.convertToType(data['graceOnInterestPayment'], 'Number');
            }
            if (data.hasOwnProperty('graceOnInterestCharged')) {
                obj['graceOnInterestCharged'] = ApiClient.convertToType(data['graceOnInterestCharged'], 'Number');
            }
            if (data.hasOwnProperty('graceOnArrearsAgeing')) {
                obj['graceOnArrearsAgeing'] = ApiClient.convertToType(data['graceOnArrearsAgeing'], 'Number');
            }
            if (data.hasOwnProperty('daysInMonthType')) {
                obj['daysInMonthType'] = EnumOptionData.constructFromObject(data['daysInMonthType']);
            }
            if (data.hasOwnProperty('daysInYearType')) {
                obj['daysInYearType'] = EnumOptionData.constructFromObject(data['daysInYearType']);
            }
            if (data.hasOwnProperty('interestRecalculationData')) {
                obj['interestRecalculationData'] = LoanProductInterestRecalculationData.constructFromObject(data['interestRecalculationData']);
            }
            if (data.hasOwnProperty('principalVariationsForBorrowerCycle')) {
                obj['principalVariationsForBorrowerCycle'] = ApiClient.convertToType(data['principalVariationsForBorrowerCycle'], [LoanProductBorrowerCycleVariationData]);
            }
            if (data.hasOwnProperty('interestRateVariationsForBorrowerCycle')) {
                obj['interestRateVariationsForBorrowerCycle'] = ApiClient.convertToType(data['interestRateVariationsForBorrowerCycle'], [LoanProductBorrowerCycleVariationData]);
            }
            if (data.hasOwnProperty('numberOfRepaymentVariationsForBorrowerCycle')) {
                obj['numberOfRepaymentVariationsForBorrowerCycle'] = ApiClient.convertToType(data['numberOfRepaymentVariationsForBorrowerCycle'], [LoanProductBorrowerCycleVariationData]);
            }
            if (data.hasOwnProperty('fundOptions')) {
                obj['fundOptions'] = ApiClient.convertToType(data['fundOptions'], [FundData]);
            }
            if (data.hasOwnProperty('repaymentFrequencyTypeOptions')) {
                obj['repaymentFrequencyTypeOptions'] = ApiClient.convertToType(data['repaymentFrequencyTypeOptions'], [EnumOptionData]);
            }
            if (data.hasOwnProperty('interestRateFrequencyTypeOptions')) {
                obj['interestRateFrequencyTypeOptions'] = ApiClient.convertToType(data['interestRateFrequencyTypeOptions'], [EnumOptionData]);
            }
            if (data.hasOwnProperty('amortizationTypeOptions')) {
                obj['amortizationTypeOptions'] = ApiClient.convertToType(data['amortizationTypeOptions'], [EnumOptionData]);
            }
            if (data.hasOwnProperty('interestTypeOptions')) {
                obj['interestTypeOptions'] = ApiClient.convertToType(data['interestTypeOptions'], [EnumOptionData]);
            }
            if (data.hasOwnProperty('interestCalculationPeriodTypeOptions')) {
                obj['interestCalculationPeriodTypeOptions'] = ApiClient.convertToType(data['interestCalculationPeriodTypeOptions'], [EnumOptionData]);
            }
            if (data.hasOwnProperty('chargeOptions')) {
                obj['chargeOptions'] = ApiClient.convertToType(data['chargeOptions'], [ChargeData]);
            }
            if (data.hasOwnProperty('multiDisburseLoan')) {
                obj['multiDisburseLoan'] = ApiClient.convertToType(data['multiDisburseLoan'], 'Boolean');
            }
            if (data.hasOwnProperty('outstandingLoanBalance')) {
                obj['outstandingLoanBalance'] = ApiClient.convertToType(data['outstandingLoanBalance'], 'Number');
            }
            if (data.hasOwnProperty('getloanProductConfigurableAttributes')) {
                obj['getloanProductConfigurableAttributes'] = LoanProductConfigurableAttributes.constructFromObject(data['getloanProductConfigurableAttributes']);
            }
            if (data.hasOwnProperty('minimumGapBetweenInstallments')) {
                obj['minimumGapBetweenInstallments'] = ApiClient.convertToType(data['minimumGapBetweenInstallments'], 'Number');
            }
            if (data.hasOwnProperty('maximumGapBetweenInstallments')) {
                obj['maximumGapBetweenInstallments'] = ApiClient.convertToType(data['maximumGapBetweenInstallments'], 'Number');
            }
            if (data.hasOwnProperty('equalAmortization')) {
                obj['equalAmortization'] = ApiClient.convertToType(data['equalAmortization'], 'Boolean');
            }
            if (data.hasOwnProperty('linkedToFloatingInterestRates')) {
                obj['linkedToFloatingInterestRates'] = ApiClient.convertToType(data['linkedToFloatingInterestRates'], 'Boolean');
            }
            if (data.hasOwnProperty('variableInstallmentsAllowed')) {
                obj['variableInstallmentsAllowed'] = ApiClient.convertToType(data['variableInstallmentsAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('interestRecalculationEnabled')) {
                obj['interestRecalculationEnabled'] = ApiClient.convertToType(data['interestRecalculationEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('floatingInterestRateCalculationAllowed')) {
                obj['floatingInterestRateCalculationAllowed'] = ApiClient.convertToType(data['floatingInterestRateCalculationAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('compoundingToBePostedAsTransaction')) {
                obj['compoundingToBePostedAsTransaction'] = ApiClient.convertToType(data['compoundingToBePostedAsTransaction'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
LoanProductData.prototype['id'] = undefined;

/**
 * @member {String} name
 */
LoanProductData.prototype['name'] = undefined;

/**
 * @member {String} description
 */
LoanProductData.prototype['description'] = undefined;

/**
 * @member {Number} fundId
 */
LoanProductData.prototype['fundId'] = undefined;

/**
 * @member {String} fundName
 */
LoanProductData.prototype['fundName'] = undefined;

/**
 * @member {Date} startDate
 */
LoanProductData.prototype['startDate'] = undefined;

/**
 * @member {Date} closeDate
 */
LoanProductData.prototype['closeDate'] = undefined;

/**
 * @member {module:model/CurrencyData} currency
 */
LoanProductData.prototype['currency'] = undefined;

/**
 * @member {Number} principal
 */
LoanProductData.prototype['principal'] = undefined;

/**
 * @member {Number} minPrincipal
 */
LoanProductData.prototype['minPrincipal'] = undefined;

/**
 * @member {Number} maxPrincipal
 */
LoanProductData.prototype['maxPrincipal'] = undefined;

/**
 * @member {Number} numberOfRepayments
 */
LoanProductData.prototype['numberOfRepayments'] = undefined;

/**
 * @member {Number} minNumberOfRepayments
 */
LoanProductData.prototype['minNumberOfRepayments'] = undefined;

/**
 * @member {Number} maxNumberOfRepayments
 */
LoanProductData.prototype['maxNumberOfRepayments'] = undefined;

/**
 * @member {Number} repaymentEvery
 */
LoanProductData.prototype['repaymentEvery'] = undefined;

/**
 * @member {module:model/EnumOptionData} repaymentFrequencyType
 */
LoanProductData.prototype['repaymentFrequencyType'] = undefined;

/**
 * @member {Number} interestRatePerPeriod
 */
LoanProductData.prototype['interestRatePerPeriod'] = undefined;

/**
 * @member {Number} minInterestRatePerPeriod
 */
LoanProductData.prototype['minInterestRatePerPeriod'] = undefined;

/**
 * @member {Number} maxInterestRatePerPeriod
 */
LoanProductData.prototype['maxInterestRatePerPeriod'] = undefined;

/**
 * @member {module:model/EnumOptionData} interestRateFrequencyType
 */
LoanProductData.prototype['interestRateFrequencyType'] = undefined;

/**
 * @member {Number} annualInterestRate
 */
LoanProductData.prototype['annualInterestRate'] = undefined;

/**
 * @member {Number} interestRateDifferential
 */
LoanProductData.prototype['interestRateDifferential'] = undefined;

/**
 * @member {Number} minDifferentialLendingRate
 */
LoanProductData.prototype['minDifferentialLendingRate'] = undefined;

/**
 * @member {Number} defaultDifferentialLendingRate
 */
LoanProductData.prototype['defaultDifferentialLendingRate'] = undefined;

/**
 * @member {Number} maxDifferentialLendingRate
 */
LoanProductData.prototype['maxDifferentialLendingRate'] = undefined;

/**
 * @member {module:model/EnumOptionData} amortizationType
 */
LoanProductData.prototype['amortizationType'] = undefined;

/**
 * @member {module:model/EnumOptionData} interestType
 */
LoanProductData.prototype['interestType'] = undefined;

/**
 * @member {module:model/EnumOptionData} interestCalculationPeriodType
 */
LoanProductData.prototype['interestCalculationPeriodType'] = undefined;

/**
 * @member {Boolean} allowPartialPeriodInterestCalcualtion
 */
LoanProductData.prototype['allowPartialPeriodInterestCalcualtion'] = undefined;

/**
 * @member {Number} inArrearsTolerance
 */
LoanProductData.prototype['inArrearsTolerance'] = undefined;

/**
 * @member {Number} transactionProcessingStrategyId
 */
LoanProductData.prototype['transactionProcessingStrategyId'] = undefined;

/**
 * @member {String} transactionProcessingStrategyName
 */
LoanProductData.prototype['transactionProcessingStrategyName'] = undefined;

/**
 * @member {Number} graceOnPrincipalPayment
 */
LoanProductData.prototype['graceOnPrincipalPayment'] = undefined;

/**
 * @member {Number} recurringMoratoriumOnPrincipalPeriods
 */
LoanProductData.prototype['recurringMoratoriumOnPrincipalPeriods'] = undefined;

/**
 * @member {Number} graceOnInterestPayment
 */
LoanProductData.prototype['graceOnInterestPayment'] = undefined;

/**
 * @member {Number} graceOnInterestCharged
 */
LoanProductData.prototype['graceOnInterestCharged'] = undefined;

/**
 * @member {Number} graceOnArrearsAgeing
 */
LoanProductData.prototype['graceOnArrearsAgeing'] = undefined;

/**
 * @member {module:model/EnumOptionData} daysInMonthType
 */
LoanProductData.prototype['daysInMonthType'] = undefined;

/**
 * @member {module:model/EnumOptionData} daysInYearType
 */
LoanProductData.prototype['daysInYearType'] = undefined;

/**
 * @member {module:model/LoanProductInterestRecalculationData} interestRecalculationData
 */
LoanProductData.prototype['interestRecalculationData'] = undefined;

/**
 * @member {Array.<module:model/LoanProductBorrowerCycleVariationData>} principalVariationsForBorrowerCycle
 */
LoanProductData.prototype['principalVariationsForBorrowerCycle'] = undefined;

/**
 * @member {Array.<module:model/LoanProductBorrowerCycleVariationData>} interestRateVariationsForBorrowerCycle
 */
LoanProductData.prototype['interestRateVariationsForBorrowerCycle'] = undefined;

/**
 * @member {Array.<module:model/LoanProductBorrowerCycleVariationData>} numberOfRepaymentVariationsForBorrowerCycle
 */
LoanProductData.prototype['numberOfRepaymentVariationsForBorrowerCycle'] = undefined;

/**
 * @member {Array.<module:model/FundData>} fundOptions
 */
LoanProductData.prototype['fundOptions'] = undefined;

/**
 * @member {Array.<module:model/EnumOptionData>} repaymentFrequencyTypeOptions
 */
LoanProductData.prototype['repaymentFrequencyTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/EnumOptionData>} interestRateFrequencyTypeOptions
 */
LoanProductData.prototype['interestRateFrequencyTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/EnumOptionData>} amortizationTypeOptions
 */
LoanProductData.prototype['amortizationTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/EnumOptionData>} interestTypeOptions
 */
LoanProductData.prototype['interestTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/EnumOptionData>} interestCalculationPeriodTypeOptions
 */
LoanProductData.prototype['interestCalculationPeriodTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/ChargeData>} chargeOptions
 */
LoanProductData.prototype['chargeOptions'] = undefined;

/**
 * @member {Boolean} multiDisburseLoan
 */
LoanProductData.prototype['multiDisburseLoan'] = undefined;

/**
 * @member {Number} outstandingLoanBalance
 */
LoanProductData.prototype['outstandingLoanBalance'] = undefined;

/**
 * @member {module:model/LoanProductConfigurableAttributes} getloanProductConfigurableAttributes
 */
LoanProductData.prototype['getloanProductConfigurableAttributes'] = undefined;

/**
 * @member {Number} minimumGapBetweenInstallments
 */
LoanProductData.prototype['minimumGapBetweenInstallments'] = undefined;

/**
 * @member {Number} maximumGapBetweenInstallments
 */
LoanProductData.prototype['maximumGapBetweenInstallments'] = undefined;

/**
 * @member {Boolean} equalAmortization
 */
LoanProductData.prototype['equalAmortization'] = undefined;

/**
 * @member {Boolean} linkedToFloatingInterestRates
 */
LoanProductData.prototype['linkedToFloatingInterestRates'] = undefined;

/**
 * @member {Boolean} variableInstallmentsAllowed
 */
LoanProductData.prototype['variableInstallmentsAllowed'] = undefined;

/**
 * @member {Boolean} interestRecalculationEnabled
 */
LoanProductData.prototype['interestRecalculationEnabled'] = undefined;

/**
 * @member {Boolean} floatingInterestRateCalculationAllowed
 */
LoanProductData.prototype['floatingInterestRateCalculationAllowed'] = undefined;

/**
 * @member {Boolean} compoundingToBePostedAsTransaction
 */
LoanProductData.prototype['compoundingToBePostedAsTransaction'] = undefined;






export default LoanProductData;

