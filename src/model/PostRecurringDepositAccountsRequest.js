

import ApiClient from '../ApiClient';

/**
 * The PostRecurringDepositAccountsRequest model module.
 * @module model/PostRecurringDepositAccountsRequest
 * @version 1.0
 */
class PostRecurringDepositAccountsRequest {
    /**
     * Constructs a new <code>PostRecurringDepositAccountsRequest</code>.
     * PostRecurringDepositAccountsRequest
     * @alias module:model/PostRecurringDepositAccountsRequest
     */
    constructor() { 
        
        PostRecurringDepositAccountsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRecurringDepositAccountsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRecurringDepositAccountsRequest} obj Optional instance to populate.
     * @return {module:model/PostRecurringDepositAccountsRequest} The populated <code>PostRecurringDepositAccountsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRecurringDepositAccountsRequest();

            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('submittedOnDate')) {
                obj['submittedOnDate'] = ApiClient.convertToType(data['submittedOnDate'], 'String');
            }
            if (data.hasOwnProperty('depositPeriod')) {
                obj['depositPeriod'] = ApiClient.convertToType(data['depositPeriod'], 'Number');
            }
            if (data.hasOwnProperty('depositPeriodFrequencyId')) {
                obj['depositPeriodFrequencyId'] = ApiClient.convertToType(data['depositPeriodFrequencyId'], 'Number');
            }
            if (data.hasOwnProperty('depositAmount')) {
                obj['depositAmount'] = ApiClient.convertToType(data['depositAmount'], 'Number');
            }
            if (data.hasOwnProperty('isCalendarInherited')) {
                obj['isCalendarInherited'] = ApiClient.convertToType(data['isCalendarInherited'], 'Boolean');
            }
            if (data.hasOwnProperty('recurringFrequency')) {
                obj['recurringFrequency'] = ApiClient.convertToType(data['recurringFrequency'], 'Number');
            }
            if (data.hasOwnProperty('recurringFrequencyType')) {
                obj['recurringFrequencyType'] = ApiClient.convertToType(data['recurringFrequencyType'], 'Number');
            }
            if (data.hasOwnProperty('mandatoryRecommendedDepositAmount')) {
                obj['mandatoryRecommendedDepositAmount'] = ApiClient.convertToType(data['mandatoryRecommendedDepositAmount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} clientId
 */
PostRecurringDepositAccountsRequest.prototype['clientId'] = undefined;

/**
 * @member {Number} productId
 */
PostRecurringDepositAccountsRequest.prototype['productId'] = undefined;

/**
 * @member {String} locale
 */
PostRecurringDepositAccountsRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostRecurringDepositAccountsRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} submittedOnDate
 */
PostRecurringDepositAccountsRequest.prototype['submittedOnDate'] = undefined;

/**
 * @member {Number} depositPeriod
 */
PostRecurringDepositAccountsRequest.prototype['depositPeriod'] = undefined;

/**
 * @member {Number} depositPeriodFrequencyId
 */
PostRecurringDepositAccountsRequest.prototype['depositPeriodFrequencyId'] = undefined;

/**
 * @member {Number} depositAmount
 */
PostRecurringDepositAccountsRequest.prototype['depositAmount'] = undefined;

/**
 * @member {Boolean} isCalendarInherited
 */
PostRecurringDepositAccountsRequest.prototype['isCalendarInherited'] = undefined;

/**
 * @member {Number} recurringFrequency
 */
PostRecurringDepositAccountsRequest.prototype['recurringFrequency'] = undefined;

/**
 * @member {Number} recurringFrequencyType
 */
PostRecurringDepositAccountsRequest.prototype['recurringFrequencyType'] = undefined;

/**
 * @member {Number} mandatoryRecommendedDepositAmount
 */
PostRecurringDepositAccountsRequest.prototype['mandatoryRecommendedDepositAmount'] = undefined;






export default PostRecurringDepositAccountsRequest;

