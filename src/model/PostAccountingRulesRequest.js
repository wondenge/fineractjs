

import ApiClient from '../ApiClient';

/**
 * The PostAccountingRulesRequest model module.
 * @module model/PostAccountingRulesRequest
 * @version 1.0
 */
class PostAccountingRulesRequest {
    /**
     * Constructs a new <code>PostAccountingRulesRequest</code>.
     * PostAccountingRulesRequest
     * @alias module:model/PostAccountingRulesRequest
     */
    constructor() { 
        
        PostAccountingRulesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAccountingRulesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAccountingRulesRequest} obj Optional instance to populate.
     * @return {module:model/PostAccountingRulesRequest} The populated <code>PostAccountingRulesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccountingRulesRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('accountToDebit')) {
                obj['accountToDebit'] = ApiClient.convertToType(data['accountToDebit'], 'Number');
            }
            if (data.hasOwnProperty('accountToCredit')) {
                obj['accountToCredit'] = ApiClient.convertToType(data['accountToCredit'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostAccountingRulesRequest.prototype['name'] = undefined;

/**
 * @member {Number} officeId
 */
PostAccountingRulesRequest.prototype['officeId'] = undefined;

/**
 * @member {Number} accountToDebit
 */
PostAccountingRulesRequest.prototype['accountToDebit'] = undefined;

/**
 * @member {Number} accountToCredit
 */
PostAccountingRulesRequest.prototype['accountToCredit'] = undefined;

/**
 * @member {String} description
 */
PostAccountingRulesRequest.prototype['description'] = undefined;






export default PostAccountingRulesRequest;

