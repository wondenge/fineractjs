

import ApiClient from '../ApiClient';
import PutTaxesGroupModifiedComponents from './PutTaxesGroupModifiedComponents';

/**
 * The PutTaxesGroupChanges model module.
 * @module model/PutTaxesGroupChanges
 * @version 1.0
 */
class PutTaxesGroupChanges {
    /**
     * Constructs a new <code>PutTaxesGroupChanges</code>.
     * @alias module:model/PutTaxesGroupChanges
     */
    constructor() { 
        
        PutTaxesGroupChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTaxesGroupChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTaxesGroupChanges} obj Optional instance to populate.
     * @return {module:model/PutTaxesGroupChanges} The populated <code>PutTaxesGroupChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTaxesGroupChanges();

            if (data.hasOwnProperty('addComponents')) {
                obj['addComponents'] = ApiClient.convertToType(data['addComponents'], ['Number']);
            }
            if (data.hasOwnProperty('modifiedComponents')) {
                obj['modifiedComponents'] = ApiClient.convertToType(data['modifiedComponents'], [PutTaxesGroupModifiedComponents]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} addComponents
 */
PutTaxesGroupChanges.prototype['addComponents'] = undefined;

/**
 * @member {Array.<module:model/PutTaxesGroupModifiedComponents>} modifiedComponents
 */
PutTaxesGroupChanges.prototype['modifiedComponents'] = undefined;

/**
 * @member {String} name
 */
PutTaxesGroupChanges.prototype['name'] = undefined;






export default PutTaxesGroupChanges;

