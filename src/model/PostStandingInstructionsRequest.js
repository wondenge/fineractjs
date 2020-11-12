

import ApiClient from '../ApiClient';

/**
 * The PostStandingInstructionsRequest model module.
 * @module model/PostStandingInstructionsRequest
 * @version 1.0
 */
class PostStandingInstructionsRequest {
    /**
     * Constructs a new <code>PostStandingInstructionsRequest</code>.
     * PostStandingInstructionsRequest
     * @alias module:model/PostStandingInstructionsRequest
     */
    constructor() { 
        
        PostStandingInstructionsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostStandingInstructionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostStandingInstructionsRequest} obj Optional instance to populate.
     * @return {module:model/PostStandingInstructionsRequest} The populated <code>PostStandingInstructionsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostStandingInstructionsRequest();

            if (data.hasOwnProperty('fromOfficeId')) {
                obj['fromOfficeId'] = ApiClient.convertToType(data['fromOfficeId'], 'Number');
            }
            if (data.hasOwnProperty('fromClientId')) {
                obj['fromClientId'] = ApiClient.convertToType(data['fromClientId'], 'Number');
            }
            if (data.hasOwnProperty('fromAccountType')) {
                obj['fromAccountType'] = ApiClient.convertToType(data['fromAccountType'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('transferType')) {
                obj['transferType'] = ApiClient.convertToType(data['transferType'], 'Number');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('fromAccountId')) {
                obj['fromAccountId'] = ApiClient.convertToType(data['fromAccountId'], 'Number');
            }
            if (data.hasOwnProperty('toOfficeId')) {
                obj['toOfficeId'] = ApiClient.convertToType(data['toOfficeId'], 'Number');
            }
            if (data.hasOwnProperty('toClientId')) {
                obj['toClientId'] = ApiClient.convertToType(data['toClientId'], 'Number');
            }
            if (data.hasOwnProperty('toAccountType')) {
                obj['toAccountType'] = ApiClient.convertToType(data['toAccountType'], 'Number');
            }
            if (data.hasOwnProperty('toAccountId')) {
                obj['toAccountId'] = ApiClient.convertToType(data['toAccountId'], 'Number');
            }
            if (data.hasOwnProperty('instructionType')) {
                obj['instructionType'] = ApiClient.convertToType(data['instructionType'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('validFrom')) {
                obj['validFrom'] = ApiClient.convertToType(data['validFrom'], 'String');
            }
            if (data.hasOwnProperty('recurrenceType')) {
                obj['recurrenceType'] = ApiClient.convertToType(data['recurrenceType'], 'Number');
            }
            if (data.hasOwnProperty('recurrenceInterval')) {
                obj['recurrenceInterval'] = ApiClient.convertToType(data['recurrenceInterval'], 'Number');
            }
            if (data.hasOwnProperty('recurrenceFrequency')) {
                obj['recurrenceFrequency'] = ApiClient.convertToType(data['recurrenceFrequency'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('recurrenceOnMonthDay')) {
                obj['recurrenceOnMonthDay'] = ApiClient.convertToType(data['recurrenceOnMonthDay'], 'String');
            }
            if (data.hasOwnProperty('monthDayFormat')) {
                obj['monthDayFormat'] = ApiClient.convertToType(data['monthDayFormat'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} fromOfficeId
 */
PostStandingInstructionsRequest.prototype['fromOfficeId'] = undefined;

/**
 * @member {Number} fromClientId
 */
PostStandingInstructionsRequest.prototype['fromClientId'] = undefined;

/**
 * @member {Number} fromAccountType
 */
PostStandingInstructionsRequest.prototype['fromAccountType'] = undefined;

/**
 * @member {String} name
 */
PostStandingInstructionsRequest.prototype['name'] = undefined;

/**
 * @member {Number} transferType
 */
PostStandingInstructionsRequest.prototype['transferType'] = undefined;

/**
 * @member {Number} priority
 */
PostStandingInstructionsRequest.prototype['priority'] = undefined;

/**
 * @member {Number} status
 */
PostStandingInstructionsRequest.prototype['status'] = undefined;

/**
 * @member {Number} fromAccountId
 */
PostStandingInstructionsRequest.prototype['fromAccountId'] = undefined;

/**
 * @member {Number} toOfficeId
 */
PostStandingInstructionsRequest.prototype['toOfficeId'] = undefined;

/**
 * @member {Number} toClientId
 */
PostStandingInstructionsRequest.prototype['toClientId'] = undefined;

/**
 * @member {Number} toAccountType
 */
PostStandingInstructionsRequest.prototype['toAccountType'] = undefined;

/**
 * @member {Number} toAccountId
 */
PostStandingInstructionsRequest.prototype['toAccountId'] = undefined;

/**
 * @member {Number} instructionType
 */
PostStandingInstructionsRequest.prototype['instructionType'] = undefined;

/**
 * @member {Number} amount
 */
PostStandingInstructionsRequest.prototype['amount'] = undefined;

/**
 * @member {String} validFrom
 */
PostStandingInstructionsRequest.prototype['validFrom'] = undefined;

/**
 * @member {Number} recurrenceType
 */
PostStandingInstructionsRequest.prototype['recurrenceType'] = undefined;

/**
 * @member {Number} recurrenceInterval
 */
PostStandingInstructionsRequest.prototype['recurrenceInterval'] = undefined;

/**
 * @member {Number} recurrenceFrequency
 */
PostStandingInstructionsRequest.prototype['recurrenceFrequency'] = undefined;

/**
 * en
 * @member {String} locale
 */
PostStandingInstructionsRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostStandingInstructionsRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} recurrenceOnMonthDay
 */
PostStandingInstructionsRequest.prototype['recurrenceOnMonthDay'] = undefined;

/**
 * @member {String} monthDayFormat
 */
PostStandingInstructionsRequest.prototype['monthDayFormat'] = undefined;






export default PostStandingInstructionsRequest;

