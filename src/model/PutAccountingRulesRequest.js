

import ApiClient from '../ApiClient';

/**
 * The PutAccountingRulesRequest model module.
 * @module model/PutAccountingRulesRequest
 * @version 1.0
 */
class PutAccountingRulesRequest {
    /**
     * Constructs a new <code>PutAccountingRulesRequest</code>.
     * PutAccountingRulesRequest
     * @alias module:model/PutAccountingRulesRequest
     */
    constructor() { 
        
        PutAccountingRulesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutAccountingRulesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutAccountingRulesRequest} obj Optional instance to populate.
     * @return {module:model/PutAccountingRulesRequest} The populated <code>PutAccountingRulesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutAccountingRulesRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutAccountingRulesRequest.prototype['name'] = undefined;






export default PutAccountingRulesRequest;

