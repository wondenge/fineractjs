

import ApiClient from '../ApiClient';

/**
 * The PutDataTablesAppTableIdResponseChanges model module.
 * @module model/PutDataTablesAppTableIdResponseChanges
 * @version 1.0
 */
class PutDataTablesAppTableIdResponseChanges {
    /**
     * Constructs a new <code>PutDataTablesAppTableIdResponseChanges</code>.
     * @alias module:model/PutDataTablesAppTableIdResponseChanges
     */
    constructor() { 
        
        PutDataTablesAppTableIdResponseChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutDataTablesAppTableIdResponseChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutDataTablesAppTableIdResponseChanges} obj Optional instance to populate.
     * @return {module:model/PutDataTablesAppTableIdResponseChanges} The populated <code>PutDataTablesAppTableIdResponseChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutDataTablesAppTableIdResponseChanges();

            if (data.hasOwnProperty('BusinessDescription')) {
                obj['BusinessDescription'] = ApiClient.convertToType(data['BusinessDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} BusinessDescription
 */
PutDataTablesAppTableIdResponseChanges.prototype['BusinessDescription'] = undefined;






export default PutDataTablesAppTableIdResponseChanges;

