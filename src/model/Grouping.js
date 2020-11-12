

import ApiClient from '../ApiClient';
import Entity from './Entity';

/**
 * The Grouping model module.
 * @module model/Grouping
 * @version 1.0
 */
class Grouping {
    /**
     * Constructs a new <code>Grouping</code>.
     * @alias module:model/Grouping
     */
    constructor() { 
        
        Grouping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Grouping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Grouping} obj Optional instance to populate.
     * @return {module:model/Grouping} The populated <code>Grouping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Grouping();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('entities')) {
                obj['entities'] = ApiClient.convertToType(data['entities'], [Entity]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
Grouping.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/Entity>} entities
 */
Grouping.prototype['entities'] = undefined;






export default Grouping;

