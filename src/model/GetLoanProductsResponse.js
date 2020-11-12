

import ApiClient from '../ApiClient';
import GetLoanProductsAccountingRule from './GetLoanProductsAccountingRule';
import GetLoanProductsAmortizationType from './GetLoanProductsAmortizationType';
import GetLoanProductsCurrency from './GetLoanProductsCurrency';
import GetLoanProductsInterestRateFrequencyType from './GetLoanProductsInterestRateFrequencyType';
import GetLoanProductsInterestRecalculationData from './GetLoanProductsInterestRecalculationData';
import GetLoanProductsInterestType from './GetLoanProductsInterestType';
import GetLoanProductsRepaymentFrequencyType from './GetLoanProductsRepaymentFrequencyType';
import GetLoansProductsDaysInMonthType from './GetLoansProductsDaysInMonthType';
import GetLoansProductsDaysInYearType from './GetLoansProductsDaysInYearType';
import GetLoansProductsInterestCalculationPeriodType from './GetLoansProductsInterestCalculationPeriodType';

/**
 * The GetLoanProductsResponse model module.
 * @module model/GetLoanProductsResponse
 * @version 1.0
 */
class GetLoanProductsResponse {
    /**
     * Constructs a new <code>GetLoanProductsResponse</code>.
     * GetLoanProductsResponse
     * @alias module:model/GetLoanProductsResponse
     */
    constructor() { 
        
        GetLoanProductsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsResponse} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsResponse} The populated <code>GetLoanProductsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('includeInBorrowerCycle')) {
                obj['includeInBorrowerCycle'] = ApiClient.convertToType(data['includeInBorrowerCycle'], 'Boolean');
            }
            if (data.hasOwnProperty('useBorrowerCycle')) {
                obj['useBorrowerCycle'] = ApiClient.convertToType(data['useBorrowerCycle'], 'Boolean');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetLoanProductsCurrency.constructFromObject(data['currency']);
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
                obj['repaymentFrequencyType'] = GetLoanProductsRepaymentFrequencyType.constructFromObject(data['repaymentFrequencyType']);
            }
            if (data.hasOwnProperty('interestRatePerPeriod')) {
                obj['interestRatePerPeriod'] = ApiClient.convertToType(data['interestRatePerPeriod'], 'Number');
            }
            if (data.hasOwnProperty('interestRateFrequencyType')) {
                obj['interestRateFrequencyType'] = GetLoanProductsInterestRateFrequencyType.constructFromObject(data['interestRateFrequencyType']);
            }
            if (data.hasOwnProperty('annualInterestRate')) {
                obj['annualInterestRate'] = ApiClient.convertToType(data['annualInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('amortizationType')) {
                obj['amortizationType'] = GetLoanProductsAmortizationType.constructFromObject(data['amortizationType']);
            }
            if (data.hasOwnProperty('interestType')) {
                obj['interestType'] = GetLoanProductsInterestType.constructFromObject(data['interestType']);
            }
            if (data.hasOwnProperty('interestCalculationPeriodType')) {
                obj['interestCalculationPeriodType'] = GetLoansProductsInterestCalculationPeriodType.constructFromObject(data['interestCalculationPeriodType']);
            }
            if (data.hasOwnProperty('transactionProcessingStrategyId')) {
                obj['transactionProcessingStrategyId'] = ApiClient.convertToType(data['transactionProcessingStrategyId'], 'Number');
            }
            if (data.hasOwnProperty('transactionProcessingStrategyName')) {
                obj['transactionProcessingStrategyName'] = ApiClient.convertToType(data['transactionProcessingStrategyName'], 'String');
            }
            if (data.hasOwnProperty('principalVariationsForBorrowerCycle')) {
                obj['principalVariationsForBorrowerCycle'] = ApiClient.convertToType(data['principalVariationsForBorrowerCycle'], ['Number']);
            }
            if (data.hasOwnProperty('interestRateVariationsForBorrowerCycle')) {
                obj['interestRateVariationsForBorrowerCycle'] = ApiClient.convertToType(data['interestRateVariationsForBorrowerCycle'], ['Number']);
            }
            if (data.hasOwnProperty('numberOfRepaymentVariationsForBorrowerCycle')) {
                obj['numberOfRepaymentVariationsForBorrowerCycle'] = ApiClient.convertToType(data['numberOfRepaymentVariationsForBorrowerCycle'], ['Number']);
            }
            if (data.hasOwnProperty('daysInMonthType')) {
                obj['daysInMonthType'] = GetLoansProductsDaysInMonthType.constructFromObject(data['daysInMonthType']);
            }
            if (data.hasOwnProperty('daysInYearType')) {
                obj['daysInYearType'] = GetLoansProductsDaysInYearType.constructFromObject(data['daysInYearType']);
            }
            if (data.hasOwnProperty('isInterestRecalculationEnabled')) {
                obj['isInterestRecalculationEnabled'] = ApiClient.convertToType(data['isInterestRecalculationEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('interestRecalculationData')) {
                obj['interestRecalculationData'] = GetLoanProductsInterestRecalculationData.constructFromObject(data['interestRecalculationData']);
            }
            if (data.hasOwnProperty('accountingRule')) {
                obj['accountingRule'] = GetLoanProductsAccountingRule.constructFromObject(data['accountingRule']);
            }
            if (data.hasOwnProperty('principalThresholdForLastInstalment')) {
                obj['principalThresholdForLastInstalment'] = ApiClient.convertToType(data['principalThresholdForLastInstalment'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanProductsResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanProductsResponse.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
GetLoanProductsResponse.prototype['shortName'] = undefined;

/**
 * @member {Boolean} includeInBorrowerCycle
 */
GetLoanProductsResponse.prototype['includeInBorrowerCycle'] = undefined;

/**
 * @member {Boolean} useBorrowerCycle
 */
GetLoanProductsResponse.prototype['useBorrowerCycle'] = undefined;

/**
 * @member {Date} startDate
 */
GetLoanProductsResponse.prototype['startDate'] = undefined;

/**
 * @member {Date} endDate
 */
GetLoanProductsResponse.prototype['endDate'] = undefined;

/**
 * @member {String} status
 */
GetLoanProductsResponse.prototype['status'] = undefined;

/**
 * @member {module:model/GetLoanProductsCurrency} currency
 */
GetLoanProductsResponse.prototype['currency'] = undefined;

/**
 * @member {Number} principal
 */
GetLoanProductsResponse.prototype['principal'] = undefined;

/**
 * @member {Number} minPrincipal
 */
GetLoanProductsResponse.prototype['minPrincipal'] = undefined;

/**
 * @member {Number} maxPrincipal
 */
GetLoanProductsResponse.prototype['maxPrincipal'] = undefined;

/**
 * @member {Number} numberOfRepayments
 */
GetLoanProductsResponse.prototype['numberOfRepayments'] = undefined;

/**
 * @member {Number} minNumberOfRepayments
 */
GetLoanProductsResponse.prototype['minNumberOfRepayments'] = undefined;

/**
 * @member {Number} maxNumberOfRepayments
 */
GetLoanProductsResponse.prototype['maxNumberOfRepayments'] = undefined;

/**
 * @member {Number} repaymentEvery
 */
GetLoanProductsResponse.prototype['repaymentEvery'] = undefined;

/**
 * @member {module:model/GetLoanProductsRepaymentFrequencyType} repaymentFrequencyType
 */
GetLoanProductsResponse.prototype['repaymentFrequencyType'] = undefined;

/**
 * @member {Number} interestRatePerPeriod
 */
GetLoanProductsResponse.prototype['interestRatePerPeriod'] = undefined;

/**
 * @member {module:model/GetLoanProductsInterestRateFrequencyType} interestRateFrequencyType
 */
GetLoanProductsResponse.prototype['interestRateFrequencyType'] = undefined;

/**
 * @member {Number} annualInterestRate
 */
GetLoanProductsResponse.prototype['annualInterestRate'] = undefined;

/**
 * @member {module:model/GetLoanProductsAmortizationType} amortizationType
 */
GetLoanProductsResponse.prototype['amortizationType'] = undefined;

/**
 * @member {module:model/GetLoanProductsInterestType} interestType
 */
GetLoanProductsResponse.prototype['interestType'] = undefined;

/**
 * @member {module:model/GetLoansProductsInterestCalculationPeriodType} interestCalculationPeriodType
 */
GetLoanProductsResponse.prototype['interestCalculationPeriodType'] = undefined;

/**
 * @member {Number} transactionProcessingStrategyId
 */
GetLoanProductsResponse.prototype['transactionProcessingStrategyId'] = undefined;

/**
 * @member {String} transactionProcessingStrategyName
 */
GetLoanProductsResponse.prototype['transactionProcessingStrategyName'] = undefined;

/**
 * @member {Array.<Number>} principalVariationsForBorrowerCycle
 */
GetLoanProductsResponse.prototype['principalVariationsForBorrowerCycle'] = undefined;

/**
 * @member {Array.<Number>} interestRateVariationsForBorrowerCycle
 */
GetLoanProductsResponse.prototype['interestRateVariationsForBorrowerCycle'] = undefined;

/**
 * @member {Array.<Number>} numberOfRepaymentVariationsForBorrowerCycle
 */
GetLoanProductsResponse.prototype['numberOfRepaymentVariationsForBorrowerCycle'] = undefined;

/**
 * @member {module:model/GetLoansProductsDaysInMonthType} daysInMonthType
 */
GetLoanProductsResponse.prototype['daysInMonthType'] = undefined;

/**
 * @member {module:model/GetLoansProductsDaysInYearType} daysInYearType
 */
GetLoanProductsResponse.prototype['daysInYearType'] = undefined;

/**
 * @member {Boolean} isInterestRecalculationEnabled
 */
GetLoanProductsResponse.prototype['isInterestRecalculationEnabled'] = undefined;

/**
 * @member {module:model/GetLoanProductsInterestRecalculationData} interestRecalculationData
 */
GetLoanProductsResponse.prototype['interestRecalculationData'] = undefined;

/**
 * @member {module:model/GetLoanProductsAccountingRule} accountingRule
 */
GetLoanProductsResponse.prototype['accountingRule'] = undefined;

/**
 * @member {Number} principalThresholdForLastInstalment
 */
GetLoanProductsResponse.prototype['principalThresholdForLastInstalment'] = undefined;






export default GetLoanProductsResponse;

