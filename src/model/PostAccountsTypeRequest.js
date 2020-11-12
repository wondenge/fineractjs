

import ApiClient from '../ApiClient';
import PostAccountsCharges from './PostAccountsCharges';

/**
 * The PostAccountsTypeRequest model module.
 * @module model/PostAccountsTypeRequest
 * @version 1.0
 */
class PostAccountsTypeRequest {
    /**
     * Constructs a new <code>PostAccountsTypeRequest</code>.
     * PostAccountsTypeRequest
     * @alias module:model/PostAccountsTypeRequest
     */
    constructor() { 
        
        PostAccountsTypeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAccountsTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAccountsTypeRequest} obj Optional instance to populate.
     * @return {module:model/PostAccountsTypeRequest} The populated <code>PostAccountsTypeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccountsTypeRequest();

            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('requestedShares')) {
                obj['requestedShares'] = ApiClient.convertToType(data['requestedShares'], 'Number');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'Number');
            }
            if (data.hasOwnProperty('submittedDate')) {
                obj['submittedDate'] = ApiClient.convertToType(data['submittedDate'], 'String');
            }
            if (data.hasOwnProperty('minimumActivePeriod')) {
                obj['minimumActivePeriod'] = ApiClient.convertToType(data['minimumActivePeriod'], 'Number');
            }
            if (data.hasOwnProperty('minimumActivePeriodFrequencyType')) {
                obj['minimumActivePeriodFrequencyType'] = ApiClient.convertToType(data['minimumActivePeriodFrequencyType'], 'Number');
            }
            if (data.hasOwnProperty('lockinPeriodFrequency')) {
                obj['lockinPeriodFrequency'] = ApiClient.convertToType(data['lockinPeriodFrequency'], 'Number');
            }
            if (data.hasOwnProperty('lockinPeriodFrequencyType')) {
                obj['lockinPeriodFrequencyType'] = ApiClient.convertToType(data['lockinPeriodFrequencyType'], 'Number');
            }
            if (data.hasOwnProperty('applicationDate')) {
                obj['applicationDate'] = ApiClient.convertToType(data['applicationDate'], 'String');
            }
            if (data.hasOwnProperty('allowDividendCalculationForInactiveClients')) {
                obj['allowDividendCalculationForInactiveClients'] = ApiClient.convertToType(data['allowDividendCalculationForInactiveClients'], 'Boolean');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('charges')) {
                obj['charges'] = ApiClient.convertToType(data['charges'], [PostAccountsCharges]);
            }
            if (data.hasOwnProperty('savingsAccountId')) {
                obj['savingsAccountId'] = ApiClient.convertToType(data['savingsAccountId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} clientId
 */
PostAccountsTypeRequest.prototype['clientId'] = undefined;

/**
 * @member {Number} productId
 */
PostAccountsTypeRequest.prototype['productId'] = undefined;

/**
 * @member {Number} requestedShares
 */
PostAccountsTypeRequest.prototype['requestedShares'] = undefined;

/**
 * @member {Number} externalId
 */
PostAccountsTypeRequest.prototype['externalId'] = undefined;

/**
 * @member {String} submittedDate
 */
PostAccountsTypeRequest.prototype['submittedDate'] = undefined;

/**
 * @member {Number} minimumActivePeriod
 */
PostAccountsTypeRequest.prototype['minimumActivePeriod'] = undefined;

/**
 * @member {Number} minimumActivePeriodFrequencyType
 */
PostAccountsTypeRequest.prototype['minimumActivePeriodFrequencyType'] = undefined;

/**
 * @member {Number} lockinPeriodFrequency
 */
PostAccountsTypeRequest.prototype['lockinPeriodFrequency'] = undefined;

/**
 * @member {Number} lockinPeriodFrequencyType
 */
PostAccountsTypeRequest.prototype['lockinPeriodFrequencyType'] = undefined;

/**
 * @member {String} applicationDate
 */
PostAccountsTypeRequest.prototype['applicationDate'] = undefined;

/**
 * @member {Boolean} allowDividendCalculationForInactiveClients
 */
PostAccountsTypeRequest.prototype['allowDividendCalculationForInactiveClients'] = undefined;

/**
 * @member {String} locale
 */
PostAccountsTypeRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostAccountsTypeRequest.prototype['dateFormat'] = undefined;

/**
 * @member {Array.<module:model/PostAccountsCharges>} charges
 */
PostAccountsTypeRequest.prototype['charges'] = undefined;

/**
 * @member {Number} savingsAccountId
 */
PostAccountsTypeRequest.prototype['savingsAccountId'] = undefined;






export default PostAccountsTypeRequest;

