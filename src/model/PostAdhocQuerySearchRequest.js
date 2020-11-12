

import ApiClient from '../ApiClient';

/**
 * The PostAdhocQuerySearchRequest model module.
 * @module model/PostAdhocQuerySearchRequest
 * @version 1.0
 */
class PostAdhocQuerySearchRequest {
    /**
     * Constructs a new <code>PostAdhocQuerySearchRequest</code>.
     * PostAdhocQuerySearchRequest
     * @alias module:model/PostAdhocQuerySearchRequest
     */
    constructor() { 
        
        PostAdhocQuerySearchRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAdhocQuerySearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAdhocQuerySearchRequest} obj Optional instance to populate.
     * @return {module:model/PostAdhocQuerySearchRequest} The populated <code>PostAdhocQuerySearchRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAdhocQuerySearchRequest();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('loanDateOption')) {
                obj['loanDateOption'] = ApiClient.convertToType(data['loanDateOption'], 'String');
            }
            if (data.hasOwnProperty('loanFromDate')) {
                obj['loanFromDate'] = ApiClient.convertToType(data['loanFromDate'], 'Date');
            }
            if (data.hasOwnProperty('loanToDate')) {
                obj['loanToDate'] = ApiClient.convertToType(data['loanToDate'], 'Date');
            }
            if (data.hasOwnProperty('includeOutStandingAmountPercentage')) {
                obj['includeOutStandingAmountPercentage'] = ApiClient.convertToType(data['includeOutStandingAmountPercentage'], 'Boolean');
            }
            if (data.hasOwnProperty('outStandingAmountPercentageCondition')) {
                obj['outStandingAmountPercentageCondition'] = ApiClient.convertToType(data['outStandingAmountPercentageCondition'], 'String');
            }
            if (data.hasOwnProperty('outStandingAmountPercentage')) {
                obj['outStandingAmountPercentage'] = ApiClient.convertToType(data['outStandingAmountPercentage'], 'Number');
            }
            if (data.hasOwnProperty('includeOutstandingAmount')) {
                obj['includeOutstandingAmount'] = ApiClient.convertToType(data['includeOutstandingAmount'], 'Boolean');
            }
            if (data.hasOwnProperty('outstandingAmountCondition')) {
                obj['outstandingAmountCondition'] = ApiClient.convertToType(data['outstandingAmountCondition'], 'String');
            }
            if (data.hasOwnProperty('minOutstandingAmount')) {
                obj['minOutstandingAmount'] = ApiClient.convertToType(data['minOutstandingAmount'], 'Number');
            }
            if (data.hasOwnProperty('maxOutstandingAmount')) {
                obj['maxOutstandingAmount'] = ApiClient.convertToType(data['maxOutstandingAmount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PostAdhocQuerySearchRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostAdhocQuerySearchRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} loanDateOption
 */
PostAdhocQuerySearchRequest.prototype['loanDateOption'] = undefined;

/**
 * @member {Date} loanFromDate
 */
PostAdhocQuerySearchRequest.prototype['loanFromDate'] = undefined;

/**
 * @member {Date} loanToDate
 */
PostAdhocQuerySearchRequest.prototype['loanToDate'] = undefined;

/**
 * @member {Boolean} includeOutStandingAmountPercentage
 */
PostAdhocQuerySearchRequest.prototype['includeOutStandingAmountPercentage'] = undefined;

/**
 * @member {String} outStandingAmountPercentageCondition
 */
PostAdhocQuerySearchRequest.prototype['outStandingAmountPercentageCondition'] = undefined;

/**
 * @member {Number} outStandingAmountPercentage
 */
PostAdhocQuerySearchRequest.prototype['outStandingAmountPercentage'] = undefined;

/**
 * @member {Boolean} includeOutstandingAmount
 */
PostAdhocQuerySearchRequest.prototype['includeOutstandingAmount'] = undefined;

/**
 * @member {String} outstandingAmountCondition
 */
PostAdhocQuerySearchRequest.prototype['outstandingAmountCondition'] = undefined;

/**
 * @member {Number} minOutstandingAmount
 */
PostAdhocQuerySearchRequest.prototype['minOutstandingAmount'] = undefined;

/**
 * @member {Number} maxOutstandingAmount
 */
PostAdhocQuerySearchRequest.prototype['maxOutstandingAmount'] = undefined;






export default PostAdhocQuerySearchRequest;

