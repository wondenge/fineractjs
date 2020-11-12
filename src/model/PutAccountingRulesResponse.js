

import ApiClient from '../ApiClient';
import PutAccountingRulesResponsechangesSwagger from './PutAccountingRulesResponsechangesSwagger';

/**
 * The PutAccountingRulesResponse model module.
 * @module model/PutAccountingRulesResponse
 * @version 1.0
 */
class PutAccountingRulesResponse {
    /**
     * Constructs a new <code>PutAccountingRulesResponse</code>.
     * PutAccountingRulesResponse
     * @alias module:model/PutAccountingRulesResponse
     */
    constructor() { 
        
        PutAccountingRulesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutAccountingRulesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutAccountingRulesResponse} obj Optional instance to populate.
     * @return {module:model/PutAccountingRulesResponse} The populated <code>PutAccountingRulesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutAccountingRulesResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutAccountingRulesResponsechangesSwagger.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutAccountingRulesResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutAccountingRulesResponsechangesSwagger} changes
 */
PutAccountingRulesResponse.prototype['changes'] = undefined;






export default PutAccountingRulesResponse;

