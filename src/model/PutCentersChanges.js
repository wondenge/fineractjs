

import ApiClient from '../ApiClient';

/**
 * The PutCentersChanges model module.
 * @module model/PutCentersChanges
 * @version 1.0
 */
class PutCentersChanges {
    /**
     * Constructs a new <code>PutCentersChanges</code>.
     * @alias module:model/PutCentersChanges
     */
    constructor() { 
        
        PutCentersChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutCentersChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutCentersChanges} obj Optional instance to populate.
     * @return {module:model/PutCentersChanges} The populated <code>PutCentersChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutCentersChanges();

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
PutCentersChanges.prototype['name'] = undefined;






export default PutCentersChanges;

