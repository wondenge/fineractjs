

import ApiClient from '../ApiClient';
import GetLoansLoanIdAmortizationType from './GetLoansLoanIdAmortizationType';
import GetLoansLoanIdCurrency from './GetLoansLoanIdCurrency';
import GetLoansLoanIdInterestCalculationPeriodType from './GetLoansLoanIdInterestCalculationPeriodType';
import GetLoansLoanIdInterestRateFrequencyType from './GetLoansLoanIdInterestRateFrequencyType';
import GetLoansLoanIdInterestType from './GetLoansLoanIdInterestType';
import GetLoansLoanIdLoanType from './GetLoansLoanIdLoanType';
import GetLoansLoanIdRepaymentFrequencyType from './GetLoansLoanIdRepaymentFrequencyType';
import GetLoansLoanIdStatus from './GetLoansLoanIdStatus';
import GetLoansLoanIdSummary from './GetLoansLoanIdSummary';
import GetLoansLoanIdTermPeriodFrequencyType from './GetLoansLoanIdTermPeriodFrequencyType';
import GetLoansLoanIdTimeline from './GetLoansLoanIdTimeline';

/**
 * The GetSelfLoansLoanIdResponse model module.
 * @module model/GetSelfLoansLoanIdResponse
 * @version 1.0
 */
class GetSelfLoansLoanIdResponse {
    /**
     * Constructs a new <code>GetSelfLoansLoanIdResponse</code>.
     * GetSelfLoansLoanIdResponse
     * @alias module:model/GetSelfLoansLoanIdResponse
     */
    constructor() { 
        
        GetSelfLoansLoanIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfLoansLoanIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfLoansLoanIdResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfLoansLoanIdResponse} The populated <code>GetSelfLoansLoanIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfLoansLoanIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetLoansLoanIdStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('clientName')) {
                obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
            }
            if (data.hasOwnProperty('clientOfficeId')) {
                obj['clientOfficeId'] = ApiClient.convertToType(data['clientOfficeId'], 'Number');
            }
            if (data.hasOwnProperty('loanProductId')) {
                obj['loanProductId'] = ApiClient.convertToType(data['loanProductId'], 'Number');
            }
            if (data.hasOwnProperty('loanProductName')) {
                obj['loanProductName'] = ApiClient.convertToType(data['loanProductName'], 'String');
            }
            if (data.hasOwnProperty('loanProductDescription')) {
                obj['loanProductDescription'] = ApiClient.convertToType(data['loanProductDescription'], 'String');
            }
            if (data.hasOwnProperty('loanPurposeId')) {
                obj['loanPurposeId'] = ApiClient.convertToType(data['loanPurposeId'], 'Number');
            }
            if (data.hasOwnProperty('loanPurposeName')) {
                obj['loanPurposeName'] = ApiClient.convertToType(data['loanPurposeName'], 'String');
            }
            if (data.hasOwnProperty('loanOfficerId')) {
                obj['loanOfficerId'] = ApiClient.convertToType(data['loanOfficerId'], 'Number');
            }
            if (data.hasOwnProperty('loanOfficerName')) {
                obj['loanOfficerName'] = ApiClient.convertToType(data['loanOfficerName'], 'String');
            }
            if (data.hasOwnProperty('loanType')) {
                obj['loanType'] = GetLoansLoanIdLoanType.constructFromObject(data['loanType']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetLoansLoanIdCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('principal')) {
                obj['principal'] = ApiClient.convertToType(data['principal'], 'Number');
            }
            if (data.hasOwnProperty('termFrequency')) {
                obj['termFrequency'] = ApiClient.convertToType(data['termFrequency'], 'Number');
            }
            if (data.hasOwnProperty('termPeriodFrequencyType')) {
                obj['termPeriodFrequencyType'] = GetLoansLoanIdTermPeriodFrequencyType.constructFromObject(data['termPeriodFrequencyType']);
            }
            if (data.hasOwnProperty('numberOfRepayments')) {
                obj['numberOfRepayments'] = ApiClient.convertToType(data['numberOfRepayments'], 'Number');
            }
            if (data.hasOwnProperty('repaymentEvery')) {
                obj['repaymentEvery'] = ApiClient.convertToType(data['repaymentEvery'], 'Number');
            }
            if (data.hasOwnProperty('repaymentFrequencyType')) {
                obj['repaymentFrequencyType'] = GetLoansLoanIdRepaymentFrequencyType.constructFromObject(data['repaymentFrequencyType']);
            }
            if (data.hasOwnProperty('interestRatePerPeriod')) {
                obj['interestRatePerPeriod'] = ApiClient.convertToType(data['interestRatePerPeriod'], 'Number');
            }
            if (data.hasOwnProperty('interestRateFrequencyType')) {
                obj['interestRateFrequencyType'] = GetLoansLoanIdInterestRateFrequencyType.constructFromObject(data['interestRateFrequencyType']);
            }
            if (data.hasOwnProperty('annualInterestRate')) {
                obj['annualInterestRate'] = ApiClient.convertToType(data['annualInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('amortizationType')) {
                obj['amortizationType'] = GetLoansLoanIdAmortizationType.constructFromObject(data['amortizationType']);
            }
            if (data.hasOwnProperty('interestType')) {
                obj['interestType'] = GetLoansLoanIdInterestType.constructFromObject(data['interestType']);
            }
            if (data.hasOwnProperty('interestCalculationPeriodType')) {
                obj['interestCalculationPeriodType'] = GetLoansLoanIdInterestCalculationPeriodType.constructFromObject(data['interestCalculationPeriodType']);
            }
            if (data.hasOwnProperty('transactionProcessingStrategyId')) {
                obj['transactionProcessingStrategyId'] = ApiClient.convertToType(data['transactionProcessingStrategyId'], 'Number');
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = GetLoansLoanIdTimeline.constructFromObject(data['timeline']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = GetLoansLoanIdSummary.constructFromObject(data['summary']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfLoansLoanIdResponse.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetSelfLoansLoanIdResponse.prototype['accountNo'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdStatus} status
 */
GetSelfLoansLoanIdResponse.prototype['status'] = undefined;

/**
 * @member {Number} clientId
 */
GetSelfLoansLoanIdResponse.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetSelfLoansLoanIdResponse.prototype['clientName'] = undefined;

/**
 * @member {Number} clientOfficeId
 */
GetSelfLoansLoanIdResponse.prototype['clientOfficeId'] = undefined;

/**
 * @member {Number} loanProductId
 */
GetSelfLoansLoanIdResponse.prototype['loanProductId'] = undefined;

/**
 * @member {String} loanProductName
 */
GetSelfLoansLoanIdResponse.prototype['loanProductName'] = undefined;

/**
 * @member {String} loanProductDescription
 */
GetSelfLoansLoanIdResponse.prototype['loanProductDescription'] = undefined;

/**
 * @member {Number} loanPurposeId
 */
GetSelfLoansLoanIdResponse.prototype['loanPurposeId'] = undefined;

/**
 * @member {String} loanPurposeName
 */
GetSelfLoansLoanIdResponse.prototype['loanPurposeName'] = undefined;

/**
 * @member {Number} loanOfficerId
 */
GetSelfLoansLoanIdResponse.prototype['loanOfficerId'] = undefined;

/**
 * @member {String} loanOfficerName
 */
GetSelfLoansLoanIdResponse.prototype['loanOfficerName'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdLoanType} loanType
 */
GetSelfLoansLoanIdResponse.prototype['loanType'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdCurrency} currency
 */
GetSelfLoansLoanIdResponse.prototype['currency'] = undefined;

/**
 * @member {Number} principal
 */
GetSelfLoansLoanIdResponse.prototype['principal'] = undefined;

/**
 * @member {Number} termFrequency
 */
GetSelfLoansLoanIdResponse.prototype['termFrequency'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdTermPeriodFrequencyType} termPeriodFrequencyType
 */
GetSelfLoansLoanIdResponse.prototype['termPeriodFrequencyType'] = undefined;

/**
 * @member {Number} numberOfRepayments
 */
GetSelfLoansLoanIdResponse.prototype['numberOfRepayments'] = undefined;

/**
 * @member {Number} repaymentEvery
 */
GetSelfLoansLoanIdResponse.prototype['repaymentEvery'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdRepaymentFrequencyType} repaymentFrequencyType
 */
GetSelfLoansLoanIdResponse.prototype['repaymentFrequencyType'] = undefined;

/**
 * @member {Number} interestRatePerPeriod
 */
GetSelfLoansLoanIdResponse.prototype['interestRatePerPeriod'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdInterestRateFrequencyType} interestRateFrequencyType
 */
GetSelfLoansLoanIdResponse.prototype['interestRateFrequencyType'] = undefined;

/**
 * @member {Number} annualInterestRate
 */
GetSelfLoansLoanIdResponse.prototype['annualInterestRate'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdAmortizationType} amortizationType
 */
GetSelfLoansLoanIdResponse.prototype['amortizationType'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdInterestType} interestType
 */
GetSelfLoansLoanIdResponse.prototype['interestType'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdInterestCalculationPeriodType} interestCalculationPeriodType
 */
GetSelfLoansLoanIdResponse.prototype['interestCalculationPeriodType'] = undefined;

/**
 * @member {Number} transactionProcessingStrategyId
 */
GetSelfLoansLoanIdResponse.prototype['transactionProcessingStrategyId'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdTimeline} timeline
 */
GetSelfLoansLoanIdResponse.prototype['timeline'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdSummary} summary
 */
GetSelfLoansLoanIdResponse.prototype['summary'] = undefined;






export default GetSelfLoansLoanIdResponse;

