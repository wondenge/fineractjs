

import ApiClient from '../ApiClient';

/**
 * The PutAccountingRulesResponsechangesSwagger model module.
 * @module model/PutAccountingRulesResponsechangesSwagger
 * @version 1.0
 */
class PutAccountingRulesResponsechangesSwagger {
    /**
     * Constructs a new <code>PutAccountingRulesResponsechangesSwagger</code>.
     * @alias module:model/PutAccountingRulesResponsechangesSwagger
     */
    constructor() { 
        
        PutAccountingRulesResponsechangesSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutAccountingRulesResponsechangesSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutAccountingRulesResponsechangesSwagger} obj Optional instance to populate.
     * @return {module:model/PutAccountingRulesResponsechangesSwagger} The populated <code>PutAccountingRulesResponsechangesSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutAccountingRulesResponsechangesSwagger();

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
PutAccountingRulesResponsechangesSwagger.prototype['name'] = undefined;






export default PutAccountingRulesResponsechangesSwagger;

