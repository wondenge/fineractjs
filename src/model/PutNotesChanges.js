

import ApiClient from '../ApiClient';

/**
 * The PutNotesChanges model module.
 * @module model/PutNotesChanges
 * @version 1.0
 */
class PutNotesChanges {
    /**
     * Constructs a new <code>PutNotesChanges</code>.
     * @alias module:model/PutNotesChanges
     */
    constructor() { 
        
        PutNotesChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutNotesChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutNotesChanges} obj Optional instance to populate.
     * @return {module:model/PutNotesChanges} The populated <code>PutNotesChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutNotesChanges();

            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} note
 */
PutNotesChanges.prototype['note'] = undefined;






export default PutNotesChanges;

